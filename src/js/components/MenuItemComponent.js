import IconComponent from "./IconComponent.js"
export default{
    components:{
        "icon-component":IconComponent
    },
    props:["item"], 
    template:
    /*html*/
    `   <a href="#" class="flex items-center h-10 mb-2 p-2 text-xs">
            <icon-component :icon="item.icon" class="w-6"> </icon-component>
            <span class="ml-2"> {{item.text}} </span>
        </a>
    `
}