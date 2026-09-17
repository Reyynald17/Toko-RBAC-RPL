<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\GradeController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);

    Route::get('/grades', [GradeController::class, 'index']);

    Route::middleware('role:admin,guru')->group(function () {
        Route::post('/grades', [GradeController::class, 'store']);
    });

    Route::middleware('role:admin')->group(function () {
        Route::delete('/grades/{id}', [GradeController::class, 'destroy']);
    });
});