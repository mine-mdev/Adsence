import IconComponent from "./IconComponent.js"
import MenuComponent from "./MenuComponent.js"
export default{
    components:{
        "icon-component":IconComponent,
        "menu-component":MenuComponent
    },
    template:
    /*html*/
    `
        <aside class="fixed top-6 bottom-6 left-6 right-6 md:w-64 md:border-r-2 md:border-secondary-light  overflow-y-auto bg-white " ref="sidebar">
            
        <!--Top-->
            <header class="fixed top-6 left-6 right-6  md:w-64 md:border-r-2 md:border-secondary-light flex items-center justify-between px-4 py-6 bg-white">
                <div class="flex items-center">
                    <p> 
                        <img src="../src/images/adsence.png" alt="adsence" class="w-12"/>
                    </p>

                    <h2 class="ml-2 text-2xl font-bold"> Adsence </h2>
                </div>
                <icon-component :icon="'menu'" @click="showNav" class="w-6 hover:cursor-pointer md:hidden"> </icon-component>
            </header>

            <!--Menu-->
            <nav ref="nav" class="hidden md:block text-secondary-dark text-sm font-medium mt-28">
                <div class="px-4">
                    <menu-component :items="adToolsItems" class="border-b border-secondary-light"> Ad Tools </menu-component>
                    <menu-component :items="financesItems"> Finances </menu-component>
                </div>
                
                <!-- Bottom Element -->
                <div class="px-4  w-full bottom-element ">
                    <div class="w-full bg-secondary-light text-secondary-dark rounded-md">
                        <a href="#" class="flex items-center justify-between h-10 mb-2 p-2">
                            <span class="ml-2"> Go Pro</span>
                            <icon-component :icon="'arrow-right'" class="w-6"> </icon-component>  
                        </a>
                    </div>
                </div>
            </nav>
        </aside>
    `, 
    data(){
        return{
            adToolsItems:[
                {id:1, text:"Dashboard",icon:"dashboard"},
                {id:2, text:"Members",icon:"members"},
                {id:3, text:"Ads",icon:"ads"},
                {id:4, text:"Security",icon:"security"},
                {id:5, text:"Platforms",icon:"platforms"},
                {id:6, text:"Notifications",icon:"notifications"},
            ], 

            financesItems:[
                {id:1, text:"Cards",icon:"cards"},
                {id:2, text:"Reports",icon:"reports"},
                {id:3, text:"Distributions",icon:"distributions"},
            ], 

        }
    },
    methods:{
        showNav(){
            var nav = this.$refs.nav,
                sidebar =this.$refs.sidebar;
            if (nav.classList.contains("hidden")){
                nav.classList.remove("hidden")
                sidebar.classList.add("z-10")
            } else{
                nav.classList.add("hidden")
                sidebar.classList.remove("z-10")
            }
        }
    }, 
    mounted(){
        var sidebar = this.$refs.sidebar ; 
            gsap.set(sidebar,{
                opacity:0
            })
            gsap.to(sidebar,{
                opacity:1,
                delay:.5
            })
    }
}