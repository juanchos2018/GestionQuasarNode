<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="Show" @hide="CerrarModal">
      <q-card style="width: 500px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Nuevo Elemento Configuración</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" >
       
          <q-select outlined v-model="idfase" :options="fasesmetodologia" label="Fase" map-options />
        <br>
                
           <q-select outlined v-model="id_elemento" :options="elentosConfi" label="Elemento" map-options />
        </q-card-section>         
       
         <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />        
            <q-btn color="primary" label="Registrar"  @click="Registrar" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
    name: 'fases-elemento',
        props:{
              DialogoFaseElemento: {       
                type: Boolean,
                required: true,
                default: false,        
            },idmetodologia: [String, String]            
        },
        data () {
            return {            
                isLoading:false,          
                Show:this.DialogoFaseElemento, 
                nombre:'',
                elentosConfi:[],
                fasesmetodologia:[],
                idfase:'',
                id_elemento:'',    
            }
        },
        created(){
           this.ListarElementos();    
        },
        mounted() {  
            this.$nextTick(() => {
                this.ListarFase(this.idmetodologia)
        });
        },
        watch: {
            DialogoFaseElemento(){
                this.Show = this.DialogoFaseElemento
            }    
        },
        methods: {
            ListarElementos(){
               let me=this;
                  var elementos=[];                  
                  this.$axios.get('Elemento/Listar/').then(response => {                                     
                  elementos=response.data;   
                  elementos.map(function(x){
                        me.elentosConfi.push({label: x.nombre,value:x.id_elemento});
                  });  
                }).catch(function(error){
                  console.log(error);
               });       
            },           
            ListarFase(metodologiaId){           
                let me=this;        
                var fases=[];               
                this.$axios.get('metodologia/Fases/'+metodologiaId).then(response => {                      
                        fases= response.data;                              
                        fases.map(function(x){
                            me.fasesmetodologia.push({label: x.nombre_fase,value:x.id_fase});                      
                        }); 
                    }).catch(function (error) {
                            console.log(error);
                    }) .finally(() => {
                })
                },
            CerrarModal(){              
                this.$emit('CerrarModal');
            },
             Registrar(){
                let faseId=this.idfase.value;
                let elementoId=this.id_elemento.value;                
                const obj={faseId,elementoId};  
                this.$axios.post('PlantillaElemento/Agregar/',obj).then(response => {                       
                  console.log(response);                 
                }).catch(function (error) {
                      console.log(error);
                }) 
            },
            Existe(){
                Swal.fire({
                    title: '<strong>Alerta </strong>',
                    icon: 'info',
                    html:
                    'Este fase existe  ' ,                
                })
            }, 
            Confirmacion(){
                this.$swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registrado',
                    text:'texto',
                    showConfirmButton: false,
                    timer: 3000
                })
            },
    }
}
</script>