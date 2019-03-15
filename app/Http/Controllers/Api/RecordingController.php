<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Storage;
use App\Student;

class RecordingController extends Controller
{
  function NewGuid() {
      $s = strtoupper(md5(uniqid(rand(),true)));
      $guidText =
          substr($s,0,8) . '-' .
          substr($s,8,4) . '-' .
          substr($s,12,4). '-' .
          substr($s,16,4). '-' .
          substr($s,20);
      return $guidText;
  }

    public function getFileRecording(Request $request){



       $validator = \Validator::make($request->all(),

      ['file' => 'required',
      'studentName' => 'required']);

        if ($validator->fails()) {
           return response()->json($validator->errors(), 422);
        }



      $file =  $request->file('file');

    if($file){




        $name = $this->NewGuid().'.'.$file->getClientOriginalExtension();
   Storage::putFileAs('public', $file, $name);

   return response()->json(['Success' =>  true]);
    }


  }






public function getData(Request $request){

$students = Student::all();

return response()->json(['MyStudents' => $students]);

}
}
