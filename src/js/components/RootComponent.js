import SidebarComponent from "./SidebarComponent.js"
import MainComponent from "./MainComponent.js"
import AsideCompoent from "./AsideCompoent.js"
export default{
    components:{
        "sidebar-component":SidebarComponent,
        "main-component":MainComponent,
        "aside-component":AsideCompoent
    },
    template:
    /*html*/
    `
        <div class="w-screen h-screen bg-gradient-to-b from-white to-secondary-light">
            <div class="w-full h-36 bg-primary-dark"> </div>
            <div class="absolute top-6 left-6 right-6 bottom-6 bg-white shadow-lg">
                <div class="relative  w-full h-full ">
                    <component
                        v-for="(component,index) in components"
                        :key="index"
                        :is="component"
                    >
                    </component>
                </div>
            </div>
        </div>
    `,
    data(){
        return{
            components:["sidebar-component", "main-component","aside-component"]
        }
    }
}