<template>
    <footer>        
        <p class="social-network footer-section">            
            <a v-for="item in socialNetwork" :key="item.name" :href="item.link">
                 <img :src="item.imageSrc" />             
             </a>             
         </p>
         <p class="patrocinadores footer-section">
             <a v-for="patrocinador in patrocinadores" :key="patrocinador.name" :href="patrocinador.link">
                 <img v-if="patrocinador.imageSrc" :src="patrocinador.imageSrc" />  
                <span v-else>
                        {{patrocinador.name}}
                </span>              
             </a>
         </p>
         <p class="footer-section">
            {{footerText }}
        </p>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            footerText:  'CLEAN UP 2020 @Copyright. Todos los derechos reservados',
             socialNetwork:[
                 {
                     name:"Facebook",
                     link:"https://facebook.com",
                     imageSrc:require("@/assets/facebook.png")                   
                 },
                 {
                     name:"Twitter",
                     link:"https://twitter.com",
                     imageSrc:require("@/assets/twitter.png")
                 },
                 {
                     name:"Instagram",
                     link:"https://instagram.com",
                     imageSrc:require("@/assets/instagram.png")
                 }
             ],
             patrocinadores:[
                 {                 
                     name:"Ayuntamiento de Málaga",
                     link:"http://www.malaga.eu/",
                     imageSrc:require("@/assets/ayuntamiento.png")
                 },
                 {
                     name:"Policia",
                     link:"https://www.policia.es/depenpol/depenpol_provincia.php?id_region=22&id_provincia=29",
                     imageSrc:require("@/assets/policia.png")
                 },
                 {
                     name:"Hospital",
                     link:"http://www.hospitalregionaldemalaga.es/",
                     imageSrc:require("@/assets/hospital.png")
                 }
             ],
            
        }
    }
   
  }
</script>

<style scoped>
footer {
    background-color: lightblue;
    padding: 10px;
    text-align: center;

}
img {
    width: 24px;
} 
a {
    margin: 5px;
}
.footer-section{
    margin-top: 10px;
}

</style>

