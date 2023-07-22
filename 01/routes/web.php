<?php

use Illuminate\Support\Facades\Route;

// outras rotas independentes aqui

// sempre deixar a rota por último
Route::get('/{any}', function () {
    return view('index');
})->where('any', '^(?!api).*$');


