<?php

use App\Http\Controllers\Api\V1\ServicesController;
use App\Http\Controllers\Api\V1\PackageController;
use App\Http\Controllers\Api\V1\GallaryController;
use App\Http\Controllers\Api\V1\SettingController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('V1')->middleware(['auth:sanctum'])->group( function () { 

    Route::apiResources([
        'service' => ServicesController::class,
        'package' => PackageController::class,
        'gallary' => GallaryController::class,
        'setting' => SettingController::class,
    ]);

});
