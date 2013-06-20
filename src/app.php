<?php

use Silex\Provider\FormServiceProvider;
use Silex\Provider\HttpCacheServiceProvider;
use Silex\Provider\TwigServiceProvider;
use Silex\Provider\ValidatorServiceProvider;
use Silex\Provider\ServiceControllerServiceProvider;
use Silex\Provider\SessionServiceProvider;
use Silex\Provider\SwiftmailerServiceProvider;
use Silex\Provider\TranslationServiceProvider;
use Silex\Provider\UrlGeneratorServiceProvider;
use Symfony\Component\Yaml\Yaml;

$app = new Silex\Application();

$app['config'] = Yaml::parse(__DIR__.'/../config/parameters.yml');

$httpCacheOptions = array(
    'http_cache.cache_dir' => __DIR__.'/cache/',
    'http_cache.esi'       => null,
);
$twigOptions = array(
    'twig.path' => __DIR__.'/../templates',
    'twig.options' => array('cache' => __DIR__.'/../cache/twig'),
    'twig.form.templates' => array('form.twig'),
);
$app->register(new FormServiceProvider());
$app->register(new HttpCacheServiceProvider(), $httpCacheOptions);
$app->register(new ServiceControllerServiceProvider());
$app->register(new SessionServiceProvider());
$app->register(new SwiftmailerServiceProvider());
$app->register(new TranslationServiceProvider());
$app->register(new TwigServiceProvider(), $twigOptions);
$app->register(new UrlGeneratorServiceProvider());
$app->register(new ValidatorServiceProvider());

$app['swiftmailer.options'] = array(
    'host'       => $app['config']['mail']['smtp'],
    'port'       => $app['config']['mail']['port'],
    'username'   => $app['config']['mail']['username'],
    'password'   => $app['config']['mail']['password'],
);

$app['twig'] = $app->share($app->extend('twig', function($twig, $app) {
    $twig->addGlobal('cssDir', 'public/css');
    $twig->addGlobal('imgDir', 'public/img');
    $twig->addGlobal('jsDir', 'public/js');

    return $twig;
}));

return $app;
