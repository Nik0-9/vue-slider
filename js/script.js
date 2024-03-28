import {slides} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return{
            slides,
            currentIndex: 0,
        }
    },
    methods:{
        nextHero(){
            if(this.currentIndex < this.slides.length - 1){
                this.currentIndex++;
            }else{
                this.currentIndex = 0;
            }
        },
        prevNext(){
            if(this.currentIndex > 0){
                this.currentIndex--;
            }else{
                this.currentIndex.length - 1;
            }
        }
    }
}).mount('#app');