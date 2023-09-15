import IconComponent from "./IconComponent.js"
import { profitsDataChart } from "../assets/profits-data-chart.js"
export default{
    components:{
        "icon-component":IconComponent
    },
    template:
    /*html*/
    `
        <main class="absolute left-0 right-0  top-24 bottom-8 md:left-64 md:top-8 xl:w-3/5 px-4 pb-3 pt-8 md:pt-1 overflow-y-auto " ref="main">
            <!--Top-->
                <header>
                    <h3 class="font-semibold text-secondary-dark"> Good'ay Seymine C. </h3>
                    <div class="flex items-center">
                        <h1 class="text-4xl font-bold"> Welcome Back </h1>
                        <icon-component :icon="'smile'" class="w-12 ml-2 text-yellow-400"> </icon-component>
                    </div>
            </header>

                <!--Banner-->
            <div class="mt-4 bg-primary-dark p-4 rounded-lg text-secondary-light">
                    <div class="flex items-center "> 
                        <h2 class="text-xl font-semibold"> Your Monthly Advert Reports </h2>
                        <icon-component :icon="'presentation'" class="w-8 ml-2 "> </icon-component>
                    </div>
                    <p class="leading-8 mt-6 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt quia illo quibusdam culpa omnis aperiam, doloremque, accusamus nihil impedit ullam esse voluptatem nisi dolorum similique distinctio molestias quam. Dicta.
                    </p>
                    <button class="mt-4  bg-secondary-light font-bold text-primary-dark rounded-md px-10 py-2"> See Report </button>
            </div>

            <!--Items-->
            <div class="grid md:grid-cols-3 gap-3 mt-4">

                <div class="bg-tertiary-light rounded-lg p-4 animate__animated animate__fadeIn">
                    <div class="rounded-md p-4 bg-secondary-light w-min">
                        <icon-component :icon="'ads'" class="w-5 text-tertiary-dark"> </icon-component>
                    </div>
                    <div class="mt-8">
                        <h2 class="text-4xl font-bold"> $ {{computedAds}}K </h2>
                        <p class="font-light"> Funds spent on Ads </p>
                    </div>
                </div>

                <div class="bg-primary-light rounded-lg p-4 animate__animated animate__fadeIn">
                    <div class="rounded-md p-4 bg-secondary-light w-min">
                        <icon-component :icon="'users'" class="w-5 text-primary-dark"> </icon-component>
                    </div>
                    <div class="mt-8">
                        <h2 class="text-4xl font-bold"> $ {{computedUsers}}K </h2>
                        <p class="font-light"> Subscriptions <br> Signups </p>
                    </div>
                </div>    

                <div class="grid gap-3 animate__animated animate__fadeIn">
                    <div class="rounded-lg p-4 border-2 border-secondary-light">
                        <p class="text-secondary-dark"> Daily impressions </p>
                        <h2 class="text-2xl font-bold "> {{computedImpressions1}} </h2>
                    </div>

                    <div class="rounded-lg p-4 border-2 border-secondary-light  animate__animated animate__fadeIn">
                        <p class="text-secondary-dark"> Daily impressions </p>
                        <h2 class="text-2xl font-bold ">$ {{computedImpressions2}}</h2>
                    </div>
                    
                </div>
            </div>

            <!--Chart -->
            <div class="mt-8">
                <h2 class="text-lg font-bold"> Spend & Profits </h2>
                <canvas ref="chart"  > </canvas>

            </div>

        </main>
    `, 
    data(){
        return{
            profitsDataChart: profitsDataChart,
            impressions1:0,
            impressions2:0, 
            ads:0,
            users:0
        }
    }, 
    computed:{
        computedImpressions1(){
            return _.floor(this.impressions1)
        },

        computedImpressions2(){
            return _.floor(this.impressions2)
        },

        computedAds(){
            return _.floor(this.ads)
        },

        computedUsers(){
            return _.floor(this.users)
        },
        
    },
    mounted(){
        var ctx = this.$refs.chart; 
        new Chart (ctx,this.profitsDataChart);

        

        gsap.to(this.$data,{
            duration:1,
            impressions1:2250325,
            impressions2:2225252,
            ads:25,
            users:62
        })   
    }
}