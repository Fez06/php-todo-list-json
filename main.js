const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist: []
        }
    },
    created() {
        axios.get('main.php')
    }
}).mount('#app');