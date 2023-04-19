import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            spaces : [
                {
                    "id": 1,
                    "space": "車位一",
                    "btn": false, // 車位管制
                    "status": true // 擋板下降
                },
                {
                    "id": 2,
                    "space": "車位二",
                    "btn": true,
                    "status": false
                },
                {
                    "id": 3,
                    "space": "車位三",
                    "btn": false,
                    "status": true
                },
                {
                    "id": 4,
                    "space": "車位四",
                    "btn": false,
                    "status": true
                },
                {
                    "id": 5,
                    "space": "車位五",
                    "btn": true,
                    "status": false
                }
            ]
        }
    },
    methods: {
        toggleBtn(id) {
            const index = this.spaces.findIndex(space => space.id === id);
            this.spaces[index].btn = !this.spaces[index].btn;
            this.spaces[index].status = !this.spaces[index].status;
        }
    },
    mounted(){
    }
}).mount('#app')