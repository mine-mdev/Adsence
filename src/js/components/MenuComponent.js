import MenuItemComponent from "./MenuItemComponent.js"
export default{
    components:{
        "menu-item-component":MenuItemComponent
    },
    props:["items"], 
    template:
    /*html*/
    `
        <div class="mt-4">
            <h3 class="text-xs font-light"> <slot/> </h3>
            <ul class="mt-4">
                <li
                    v-for="item in items"
                    :key="item.id"
                >
                    <menu-item-component :item="item"> </menu-item-component>
                </li>
            </ul>
        </div>
    `
}