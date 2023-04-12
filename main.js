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

        axios.get('main.php', {
            params: {
                
            }
        })
            .then((response) => {
                this.todolist = response.data;
            })
    }
}).mount('#app');