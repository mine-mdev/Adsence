import IconComponent from "./IconComponent.js"
export default{
    components:{
        'icon-component':IconComponent
    },
    props:["card"],
    template:
    /*html*/
    `
        <div class="bg-white rounded-lg p-4 mb-4">

            <!--logo-->
            <div class="flex items-center">
                <p class="p-4 rounded-md border-2 border-secondary-light">
                    <img :src="card.src" :alt="card.name" class="w-16"/>
                </p>
                <div class="ml-2">
                    <h3 class="text-secondary-dark font-light"> Ad Name </h3>
                    <h2 class="text-2xl font-bold uppercase"> {{card.tag}} </h2>
                </div>
            </div>

            <!--Impression-->
            <div class="mt-8">
                <h3 class="text-secondary-dark font-light"> Impressions </h3>
                <h2 class="text-4xl font-bold uppercase"> {{card.impression}} </h2>
            </div>

            <!--Period -->
            <div class="bg-secondary-light text-secondary-dark w-full font-medium text-sm flex items-center px-4 py-2 rounded-md mt-4">
                <icon-component :icon="'date'" class="w-5"> </icon-component>
                <div class="w-full flex justify-between items-center ml-4">
                    <p class="uppercase"> {{card.period}} </p>
                    <p> 2023 </p>
                </div>
            </div>
        </div>
    `
}