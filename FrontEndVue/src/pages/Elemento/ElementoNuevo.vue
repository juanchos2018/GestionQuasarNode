<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="Show" @hide="CerrarModal">
      <q-card style="width: 500px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Nueva Elemento</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
         <q-input outlined v-model="codigo" label="Codifo Elemento" />
         <br>
         <q-input outlined v-model="nombre" label="nombre Elemento" />
        </q-card-section>
         
       
         <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
         <!-- <q-btn flat label="Accept" color="primary" v-close-popup />
          -->
            <q-btn color="primary" label="Registrar"  @click="RegistrarElemento" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
      name: 'elemento-nuevo',
      props:{
         DialogoElemento: {       
            type: Boolean,
            required: true,
            default: false
        },           
        },
        data () {
            return {            
                 contador:0,
                CodeMetodologia:'M',
                codigo:'',
                nombre:'',            
                isLoading:false,          
                Show:this.DialogoElemento,
            }
        },
        watch: {
            DialogoElemento(){
                 this.Show = this.DialogoElemento
             }
         },
         methods: {
              RegistrarElemento(){
                let codigo_elemento=this.codigo;   
                let nombre=this.nombre;                
                const obj={codigo_elemento,nombre};
                 this.$axios.post('elemento/Agregar/',obj).then(response => {  
                    console.log(response)
                    this.ListarElemetos();
                        
                }).catch(function (error) {
                    console.log(error);
                }) .finally(() => {
                    
                })
            },      
            ListarElemetos(){
                this.$emit('ListarElemento-Emit');
            },
            CerrarModal(){              
                this.$emit('CerrarModal');
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