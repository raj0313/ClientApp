<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{path?}','app');


// Route::get('/', function () {
//    // return view('welcome');

//     $links = \App\Link::all();
//     return view('welcome')->with('links', $links);

// });

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/submit', function(){
//     return view('submit');
// });