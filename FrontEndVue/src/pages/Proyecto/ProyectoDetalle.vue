<template>
    <q-page class="q-pa-md">
         <q-card class="my-card">
      <q-card-section>
     <div>
         proyecto 1
            <q-linear-progress :value="progress" class="q-mt-md" />
            <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ea, accusantium, aliquid consequatur quam sequi deserunt voluptatem repudiandae libero in ullam quas? Rerum quas, reprehenderit nesciunt blanditiis tempore recusandae nostrum!</p>
     </div>
      <label>Fecha inicio</label><br>
       <label>fecha fin</label>
      </q-card-section>
    </q-card> 
     <div class="q-pa-md row items-start ">
     <div class="col-4" style="padding: 0px 1% 0px">
        <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);"
                >   
            <q-card-section>         
            </q-card-section>
            <q-card-section class="q-pt-none">
                <div style="display: flex;">
                <font-awesome-icon :icon="myIcon" size="5x"/>
                <div class="text-h6 " style="margin-left:5%"> Nuevo</div>  
                <div class="text-h6 " style="margin-left:5%"> 4</div> 
                </div>
            </q-card-section>
           </q-card>
       </div>
        <div class="col-4" style="padding: 0px 1% 0px">
        <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);"
                >   
            <q-card-section>         
            </q-card-section>
            <q-card-section class="q-pt-none">
                <div style="display: flex;">
                <font-awesome-icon :icon="myIcon" size="5x"/>
                <div class="text-h6 " style="margin-left:5%"> Nuevo</div>  
                <div class="text-h6 " style="margin-left:5%"> 4</div> 
                </div>
            </q-card-section>
           </q-card>
       </div>
        <div class="col-4" style="padding: 0px 1% 0px">
        <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);"
                >   
            <q-card-section>         
            </q-card-section>
            <q-card-section class="q-pt-none">
                <div style="display: flex;">
                <font-awesome-icon :icon="myIcon" size="5x"/>
                <div class="text-h6 " style="margin-left:5%"> Nuevo</div>  
                <div class="text-h6 " style="margin-left:5%"> 4</div> 
                </div>
            </q-card-section>
           </q-card>
       </div>
     </div>
      <br>
         <div class="row">
                <div class=" q-pa-md col-4" v-for="item in items" :key="item.key"  >   
                <q-card class="my-card" flat bordered>
                        <q-card-section horizontal>
                            <q-card-section class="q-pt-xs">
                            <div class="text-overline">Fase</div>
                            <div class="text-h5 q-mt-sm q-mb-xs"> {{item.nombre_fase}}</div>
                            <div class="text-caption text-grey">                           
                            </div>                             
                            </q-card-section>                         
                        </q-card-section>
                           <q-card-section class="col-5 flex flex-center">
                                <q-linear-progress :value="item.porcentaje_avance/100" class="q-mt-md" max="100" />
                            </q-card-section>                       
                <q-separator />
                    <q-card-actions>                      
                        <q-icon  style="font-size: 2em;" name="search" />
                        <q-btn flat>
                        Ver
                        </q-btn>                       
                    </q-card-actions> 
            </q-card>
                </div>
            </div>       
    </q-page>
</template>
<script>
import axios from  'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faColumns } from '@fortawesome/free-solid-svg-icons'

export default {
            
        components: {
             FontAwesomeIcon
        },
        data(){
            return{
                progress: 0.5,
                items:[],
                  myIcon: faColumns,
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    

            }
        },
        mounted(){
                this.GetDatos()
        },
        computed: {
                appIcon () {
                return faChessQueen
                }
        },
        created(){

        },
        methods:{
                GetDatos(){
                        var item = this.$route.params.id_proyecto
                        if(item){          
                              this.MostarFaseMetodolgiaProyecto(item); 
                        }
                },
                MostarFaseMetodolgiaProyecto(id){
                     let me=this;//  this.$axios.get('PlantillaElemento/'+faseId).then(response => {    
                    this.$axios.get('Proyecto/ListarFasesProyecto/'+id).then(response => {              
                            me.items = response.data;   
                          //  console.log(response.data)               
                         //   me.ElentosFaseProyecto(me.id_proyecto, me.fases[0].id_fase);     
                           // me.nombre_fase =me.fases[0].nombre_fase;                   
                        }).catch(function (error) {
                                console.log(error);  
                        }) .finally(() => {
                    })
                }
        }
}
</script>