const app = new Vue({
    el: '#app',
    methods: {
        async getJson(url){
            try {
                const result = await fetch(url);
                return await result.json();
            } catch (error) {
                return this.$refs.error.setText(error);
            }
        },
        async postJson(url, data){
            try {
                const result = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await result.json();
            } catch (error) {
                return this.$refs.error.setText(error);
            }
        },
        async putJson(url, data){
            try {
                const result = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await result.json();
            } catch (error) {
                return this.$refs.error.setText(error);
            }
        },
        async delJson(url, data){
            try {
                const result = await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await result.json();
            } catch (error) {
                return this.$refs.error.setText(error);
            }
        },
    },
    mounted() {
        
    }
});