const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist: [],
            newTodo: ''
        }
    },
    created() {
        // const todo = '';

        // axios.post('main.php', todo, {
        //     headers: { 'Content-Type': 'multipart/form-data' }
        // }) 
        //     .then((response) => {
        //         console.log(response);
        //         this.todolist = response.data;
        //         console.log(this.todolist)
        //     })

        /*NDR: io all'inizio pensavo si potesse fare anche solo con
        axios.get('server.php')
            .then(response => {
                this.todos = response.data;
            }); 
            ma evidentemente non si puo' o vue dell'inspector era rotto,
            da chiedere!!
        */


        axios.get('main.php', {
            params: {
                //se scrivo qui' dei param dell'array vengono passati
            }
        })
            .then((response) => {
                this.todolist = response.data;
            })
    },
    methods: {
        addTodo() {
            console.log('new one')
            const data = {
                newTodo: this.newTodo
            };

            axios.post('main.php', data, {
                headers: {'content-Type': 'multipart/form-data'}
            }).then((response) => {
                this.todolist = response.data;
                console.log('ok')
            });
        }
    }
}).mount('#app');