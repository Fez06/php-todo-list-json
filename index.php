<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PHP ToDo List JSON</title>
    <!-- vuejs -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <!-- axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


</head>

<?php 

?>
<body>
    <div id="app">
        <h1>To Do List</h1>
        <ul>
            <li v-for="todo in todolist">
                <h3>{{todo.text}}</h3>
            </li>
        </ul>
    </div>
    <script src="main.js"></script>
</body>
</html>