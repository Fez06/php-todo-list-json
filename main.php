<?php 

$todoList = file_get_contents(__DIR__.'/todolist.json');

$todoList = json_decode($todoList, true);

//$todoList[0]['text'] = 'merdaaa';

//var_dump($todoList);

//$todoList = json_encode($todoList);



$newTodo = isset($_POST['newTodo']) ? $_POST['newTodo'] : NULL;

if($newTodo !== NULL){
    $todoList = json_decode($todoList, true);
    $todoList[] = [
        "text" => $newTodo,
        "done" => false
    ];

    $todoList = json_encode($todoList);
    file_put_contents(__DIR__.'/todolist.json', $todoList);
}

header('content-Type: application/json');
echo json_encode($todoList);
