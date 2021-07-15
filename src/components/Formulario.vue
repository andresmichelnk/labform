<template>
    <div>
        <label>
            <h4>Ingrese lo que le de la gana</h4>
            <input type="text" v-model="texto.name">
        </label>
        <button @click="guardartext">Guardar</button>

        <div >
            <ul>
                <h4>Lista</h4>
                <li v-for="item of list" :key="item">
                    <input type="checkbox" :value="item" v-model="list2"> 
                    {{item}}
                </li>
            </ul>
        </div>  

        <div>
            <ul>
                <h4 v-if="list2 != null">Lista Guarda</h4>
                <li v-for="item2 of list2" :key="item2">
                   <!-- <input type="checkbox" > -->
                    {{item2}}
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import { Texto } from '../utiles/Texto'

 var texto = new Texto({name:"Dno",view:false})

export default {
    name: 'Formulario',
    data(){
        return{
         texto,
          list:[],
          list2:[],
         // guardar: false
        
        }
        
    },

    methods:{
        guardartext(){ 
           this.list.push(this.texto.name) 
           this.texto.name = ''
         //  this.texto.view = false
           console.log(this.list)
           
        },
      
    },

 
}


</script>

<style>

</style>