<?php 

$todoList = file_get_contents(__DIR__.'/todolist.json');

$todoList = json_decode($todoList, true);

//$todoList[0]['text'] = 'merdaaa';

//var_dump($todoList);

//$todoList = json_encode($todoList);

header('content-Type: application/json');
echo json_encode($todoList);



