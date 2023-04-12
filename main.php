<?php 

$todoList = file_get_contents(__DIR__.'/todolist.json');

$todoList = json_decode($todoList, true);

var_dump($todoList);

