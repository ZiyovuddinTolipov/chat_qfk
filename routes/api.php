<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;

// O'qilgan xabarlarni belgilash uchun route
Route::post('/messages/mark-as-read/{receiverId}', [MessageController::class, 'markMessagesAsRead']);