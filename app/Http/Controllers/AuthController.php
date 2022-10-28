<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\HttpResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;

class AuthController extends Controller
{
    use HttpResponse;
    public function login(LoginUserRequest $request){

        $request->validated($request->all());
        if (!Auth::attempt($request->only('email', 'password'))) {
            return $this->error('', 'Credentials do not match', 401); //user is not authorized
        }

        // uncomment this for token
        $user = User::where('email',$request->email)->first();
        return $this->success([
            'user' => $user,
            'token' => $user->createToken('Api Token of '.$user->name)->plainTextToken,
            
        ]);
        // return response()->json('Login Endpoint');
        // for debug
        
    }

    public function register(StoreUserRequest $request){
        // return response()->json('register Endpoint');
        $request->validated($request->all());
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'name' => $request->name,
            'matric' => $request->matric,
            'speciality' => $request->speciality,
            'about' => $request->about,
        ]);

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API token of'.$user->name)->plainTextToken,
        ]);
    }
    public function logout(){
        Auth::user()->currentAccessToken()->delete();
        return $this->success([
            'message' => 'You have successfully been logged out, Token Deleted Successfully!'
        ]);
    }
}
