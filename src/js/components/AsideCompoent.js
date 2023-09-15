import IconComponent from "./IconComponent.js"
import CardComponent from "./CardComponent.js";
export default{
    components:{
        "icon-component":IconComponent,
        "card-component":CardComponent
    },
    template:
    /*html*/
    `
        <aside class="fixed top-6 bottom-6 right-6 xl:left-aside hidden xl:block px-4 py-8 bg-secondary-light overflow-y-auto " ref="aside">
            <!--top-->
            <header>
                <h2 class="text-xl font-bold"> Actives Compaigns </h2>
                <div class="px-4 py-2 text-secondary-dark bg-white w-max rounded-full mt-8 flex items-center" ref="search">
                    <icon-component :icon="'search'" class="w-6 hover:cursor-pointer" @click="displayInput"> </icon-component>
                    <input  v-if="seen" type="text" class="outline-0 ml-2 w-full" v-model="value"/>
                </div>
            </header>

            <!--card-->
            <div class="mt-8">
                <TransitionGroup
                    tag="ul"
                    :css="false"
                    @beforeEnter="onBeforeEnter"
                    @enter="onEnter"
                    @leave="onLeave"
                >
                    <li
                        v-for="(card,index) in computedCards"
                        :key="index"
                        :data-index="index"
                    >
                        <card-component :card="card"> </card-component>
                    </li>
                </TransitionGroup>
            </div>
        </aside>
    `,
    data(){
        return{
            seen:false,
            cards:[
                {name:"google",src:"../src/images/google.png",tag:"Fomo#3",impression:"246k", period:"jan24 - feb24"},
                {name:"linkedIn",src:"../src/images/linkedIn.png",tag:"Fomo#3",impression:"24k", period:"jan24 - apr24"},
                {name:"youtube",src:"../src/images/youtube.jpg",tag:"Vlog City",impression:"300k", period:"jan24 - jun24"},
            ], 
            value:""
        }
    },
    computed:{
        computedCards(){
            var value = this.value;
            return this.cards.filter((card)=>{
                return card.name.toString().toLowerCase().indexOf(value.toString().toLowerCase().trim()) !== -1
            }).sort()
        }
    },
    methods:{
        displayInput(){
            this.seen=true
            var search = this.$refs.search;
            gsap.set(search,{
                width:0
            })
            gsap.to(search,{
                width:"100%"
            })
        }, 
        
        onBeforeEnter(el){
            gsap.set(el,{
                opacity:0
            })
        }, 
        onEnter(el,done){
            gsap.to(el,{
                opacity:1,
                delay: el.dataset.index*0.2,
                onComplete:done
            })

            console.log(el);
        }, 
        onLeave(el,done){
            gsap.to(el,{
                opacity:0,
                onComplete:done
            })
        }
        
    },
    mounted(){
        var aside = this.$refs.aside ; 
        gsap.set(aside,{
            opacity:0
        })
        gsap.to(aside,{
            opacity:1,
            delay:1
        })

    }
}