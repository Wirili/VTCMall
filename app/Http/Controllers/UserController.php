<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;

class UserController extends Controller
{
    //
    function edit($id){
        $id = intval($id);
        $user=User::find($id);
        return response()->json(['data'=>$user]);
    }//
    function store($id,Request $request){
        $id = intval($id);
        $user=User::find($id);
        return response()->json(['data'=>$user]);
    }
}
