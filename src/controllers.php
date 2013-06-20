<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Validator\Constraints as Assert;

$app->match('/', function () use ($app) {
    $request = $app['request'];

    $data = array();
    $form = $app['form.factory']->createBuilder('form', $data)
        ->add('name', 'text', array(
            'constraints' => new Assert\NotBlank()
        ))
        ->add('email', 'email', array(
            'constraints' => new Assert\Email()
        ))
        ->add('phone', 'text', array(
            'constraints' => new Assert\NotBlank()
        ))
        ->add('message', 'textarea', array(
            'constraints' => new Assert\NotBlank()
        ))
        ->getForm();

    if ('POST' == $request->getMethod()) {
        $form->bind($request);

        if ($form->isValid()) {
            $data = $form->getData();

            $emailBody = $app['twig']->render('email.html', array(
                'name'    => $data['name'],
                'email'   => $data['email'],
                'phone'   => $data['phone'],
                'message' => $data['message'],
            ));

            $message = \Swift_Message::newInstance()
                ->setSubject($app['config']['mail']['subject'])
                ->setFrom(array($data['email'] => $data['name']))
                ->setTo(array($app['config']['mail']['to']))
                ->setBody($emailBody,'text/html');

            $emailResult = $app['mailer']->send($message);

            $flashType    = 'success';
            $flashMessage = 'Merci, votre message a été envoyé. Je vous répondrai au plus vite.';
            $logMessage   = "Mail sent from : '%s', email : '%s', phone number : '%s', with message : '%s'.";

            if (!$emailResult) {
                $flashType    = 'error';
                $flashMessage = 'Oups, une erreur est survenue dans l\'envoi de votre message.<br/> Vous pouvez me contacter par mail : <a href="mailto:cyril@18ruedivona.eu">cyril@18ruedivona.eu</a>, ou téléphone : <a href="tel:+33687907963">+33 6 87 90 79 63</a>';
                $logMessage   = "Mail error from : '%s', email : '%s', phone number : '%s', with message : '%s'.";
            }

            $app['session']->set('flash', array(
                'type'    => $flashType,
                'message' => $flashMessage,
            ));

            $app['monolog']->addInfo(sprintf($logMessage, $data['name'], $data['email'], $data['phone'], $data['message']));

            if ($app['debug']) {
                return $app->redirect('/index_dev.php#message');
            }

            return $app->redirect('/#message');
        }
    }

    $body = $app['twig']->render('index.html', array(
        'form' => $form->createView(),
    ));

    $cacheMaxAge = 0;
    if (isset($app['config']['cache'])) {
        $cacheMaxAge = $app['config']['cache'];
    }

    return new Response($body, 200, array('Cache-Control' => 's-maxage='.$cacheMaxAge.', public'));
})
->bind('homepage')
->before(function() use ($app) {
    $flash = $app['session']->get('flash');
    $app['session']->set('flash', null);

    if (!empty($flash)) {
        $app['twig']->addGlobal('flash', $flash);
    }
});

$app->error(function (\Exception $e, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    $page = 404 == $code ? '404.html' : '500.html';

    return new Response($app['twig']->render($page, array('code' => $code)), $code);
});
