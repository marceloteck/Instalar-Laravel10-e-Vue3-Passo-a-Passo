<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\loginController;

// outras rotas independentes
Route::get('/test', function () {
    return view('teste');
});

// sempre deixar a rota por último
Route::get('/{any}', function () {
    return view('index');
})->where('any', '^(?!api).*$');


