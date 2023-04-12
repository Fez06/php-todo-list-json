const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist: []
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
                
            }
        })
            .then((response) => {
                this.todolist = response.data;
            })
    }
}).mount('#app');