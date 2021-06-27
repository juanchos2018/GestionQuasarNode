<template>
  <div class="q-pa-md">
    <q-table
      title="Solicitud de Cambio"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">         
           <q-td key="codigo" :props="props">          
              {{ props.row.codigo }}         
          </q-td>
             <q-td key="nombre_proyecto" :props="props">          
              {{ props.row.nombre_proyecto }}         
          </q-td>
          
             <q-td key="nombre" :props="props">          
              {{ props.row.nombre }}         
          </q-td>
           <q-td key="estado" :props="props">          
              {{ props.row.estado }}         
          </q-td>
           <q-td key="fecha" :props="props">          
              {{ props.row.fecha }}         
          </q-td>
          <q-td key="button" :props="props">              
              <a :href="props.row.documento" class="btnareft"  style="margin-left:10px" target="_blank">Documento</a>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
           
                  
                     { name: 'codigo', label: 'codigo', field: 'codigo', sortable: true },  
                     { name: 'nombre_proyecto', label: 'Proyecto', field: 'nombre_proyecto', sortable: true },  
                      { name: 'nombre', label: 'Solictgante', field: 'nombre', sortable: true },  
                  
                     { name: 'estado', label: 'estado', field: 'estado', sortable: true },  
                       { name: 'fecha', label: 'fecha', field: 'fecha', sortable: true },            

         { name: 'button', label: 'Doc', field: 'button' },
      ],
        data:[],
      
    }
  },
  created() {
       this.ListarSolicitudes();
  },
  methods: {
         ListarSolicitudes(){
              let me=this;
                this.$axios.get('Solicitud/ListarSolicitud').then(response => {                    
                      me.data = response.data;    
                      console.log(response.data)                  
                  }).catch(function (error) {
                      console.log(error);
                }) .finally(() => {                  
            })
          },
  }
}
</script>

<style>
.btnareft {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

</style>