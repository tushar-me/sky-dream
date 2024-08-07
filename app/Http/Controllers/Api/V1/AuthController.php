<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    /**
     * @throws ValidationException
     */
    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            if(Auth::user()->role != "customer"){
                Auth::logout();

                throw ValidationException::withMessages([
                    'email' => 'These credentials do not match our records.',
                ]);
            }

            $user = Auth::user();
            $user->tokens()->delete();
            $user->token =  $user->createToken('MyApp')->plainTextToken;

            return response()->json([
                "message" => "User Login Successfully Done...",
                "data" =>$user
            ]);
        }
        else{
            throw ValidationException::withMessages([
                'email' => 'These credentials do not match our records.',
            ]);
        }
    }



    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->user()->tokens()->delete();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(["message" => "User Login Successfully Done..."]);
    }



}
