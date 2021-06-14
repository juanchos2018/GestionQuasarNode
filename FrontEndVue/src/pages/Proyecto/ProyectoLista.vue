<template>
     <q-page class="q-pa-md">
        <h5> Proyectos </h5>             
     <q-btn color="primary" style="width: 150px"  @click="IdProyecto">
         <div class="ellipsis">
            Agregar
            </div>            
         </q-btn>
         <div class="row"  >
            <div class="q-pa-md col-6" v-for="item in items" :key="item.key">
            <q-card class="my-card">
            <q-card-section>
            <div class="text-h6">{{item.nombre_proyecto}} 
            <div class="float-right">
            <q-btn-dropdown    
                        color="teal"                        
                        @click="onMainClick"
                        >
                <q-list>
                    <q-item clickable v-close-popup >
                    <q-item-section avatar>
                       <q-icon name="account_circle" class="big-icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Nuevo Miembro</q-item-label>                     
                    </q-item-section>                   
                    </q-item>
                    <q-item clickable v-close-popup >
                    <q-item-section avatar>
                        <q-icon name="vertical_split" class="big-icon" />                        
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Miembros</q-item-label>                       
                    </q-item-section>                   
                    </q-item>
                </q-list>
              </q-btn-dropdown>
          </div>
        </div>
      </q-card-section>      
      <q-card-section>                
                <div ><q-chip square color="orange" text-color="white" >
                {{item.estado}}
            </q-chip>   
            </div>
            <div class="text-subtitle2">Fecha Inicio :  {{item.fecha_inicio}}</div>
            <div class="text-subtitle2">Fecha Fin :  {{item.fecha_termino}}</div>
                    <q-btn outline color="primary"  style="float:right" label="Detalle" @click="IrProyectoDetalle(item.id_proyecto)" />
                <div class="row">
                  <div  style=" display: flex;" v-for="miembro in items[item.index].listaMiembro" :key="miembro.key">   
                  <q-chip>
                        <q-avatar>
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                        {{miembro.nombre}}
                    </q-chip>
                 </div>
                 </div>          
                  <br>
         </q-card-section>
      </q-card>
     </div>
    </div>       
  </q-page>
</template>


<script>

export default {
        components: {  },
        data () {
            return {
                 listaMiembros:[],
                 items:[],
              
                DialogoElemento:false,
                DialogoModificar:false,           
                id_elemento:'', 
             
               
            
            }
        },
        mounted(){
             //   this.GetDatos()
        },
        created(){
              this.ListarProyecto();
        },
        methods:{
            IdProyecto(){
                  this.$router.push({name:"proyectonuevo" });   
            },           
            ListarProyecto(){
             let me=this;
               this.$axios.get('Proyecto/Listar/').then(response => {                    
                      me.items = response.data;  
                      console.log(response.data);   
                      me.LisrarMiembrosProyecto();                 
                  }).catch(function (error) {
                      console.log(error);
                }) .finally(() => {                     
                })
           },    
           LisrarMiembrosProyecto(){
              let me=this;              
               this.$axios.get('Miembro/Listar').then(response => {                    
                      me.listaMiembros = response.data; 
                      console.log(response.data)                        
                        for(var i=0;i< me.items.length ;i++){
                            for  (var e=0;e< me.listaMiembros.length ;e++){
                                if(me.items[i].id_proyecto==me.listaMiembros[e].id_proyecto){  
                                      me.items[i].listaMiembro.push({ nombre: me.listaMiembros[e].nombre,inicial:me.listaMiembros[e].inicial})
                                    
                                   } 
                               }                    
                           } 
                  }).catch(function (error) {
                      console.log(error);
                }) .finally(() => {                     
              })
           },
           CerrarModal() {
                this.DialogoFase = false;    
                this.DialogoFaseElemento = false;           
           },
           onMainClick () {
            // console.log('Clicked on main button')
            },
            IrProyectoDetalle(id_proyecto){
                 this.$router.push({name:"proyectodetalle",params:{id_proyecto}}); 
                 // this.$router.push({name:"fases",params:{item} }); 
            },

          

        }
}
</script>
