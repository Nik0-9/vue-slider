import {slides} from './data';

const {createApp} = Vue;

createApp({
    data(){
        return{
            slides,
        }
    },
    methods:{

    }
}).mount('#app');