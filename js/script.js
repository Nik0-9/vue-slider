import {slides} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return{
            slides,
            currentIndex: 0,
            time: ''
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
        prevHero(){
            if(this.currentIndex > 0){
                this.currentIndex--;
            }else{
                this.currentIndex.length - 1;
            }
        },
        goToSlide(index){
            this.currentIndex = index;
        },
        start(){
            this.time = setInterval(this.nextHero, 2000);
        },
        pause(){
            clearInterval(this.time);
        }
    },
    mounted(){
        this.time
    }
    
}).mount('#app');