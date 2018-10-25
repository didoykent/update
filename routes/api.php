<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/', ['as' => 'home_path', 'uses' => function () {
    return view('welcome');
}]);

  Route::post('updateStatus', 'Api\Auth\ChatController@updateStatus');

Route::post('mega_signin', 'Api\Auth\SignInController@megaSignIn');


Route::post('student_logout', 'Api\Auth\LogOutController@studentLogOut');


  Route::post('createNewUser', 'Api\Auth\ChatController@createNewUser');
	Route::post('dataChanges', 'Api\Auth\ChatController@dataChanges');

Route::group(['middleware' => ['jwt.auth', 'jwt.refresh']], function(){
Route::post('mobileUpload', 'Api\Auth\ChatController@mobileUpload');
Route::post('uploadFile', 'Api\Auth\ChatController@uploadFile');
Route::post('uploadAvatar', 'Api\Auth\ChatController@uploadAvatar');
Route::post('student_signup', 'Api\Auth\SignUpController@studentSignUp');
  Route::get('getFriendLists', 'Api\Auth\ChatController@getFriendLists');
  Route::get('getUserId', 'Api\Auth\ChatController@getCurrentUserId');
  Route::get('getUnreadMessages', 'Api\Auth\ChatController@getUnreadMessages');
  Route::post('saveMessage', 'Api\Auth\ChatController@saveMessage');
  Route::put('editMessage/{id}', 'Api\Auth\ChatController@editMessage');
  Route::post('getMessages', 'Api\Auth\ChatController@getMessages');
  Route::post('initializeData', 'Api\Auth\ChatController@initializeData');
  Route::post('writeTest', 'Api\Auth\ChatController@write');



});
