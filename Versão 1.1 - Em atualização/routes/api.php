<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\registerController;
use App\Http\Controllers\API\loginController;

Route::post('/registerUser', [registerController::class, 'Register']);
Route::post('/loginUser', [loginController::class, 'Login']);
Route::get('/loginUser/verify', [loginController::class, 'verify']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
