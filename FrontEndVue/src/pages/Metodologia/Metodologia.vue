<template>
   <q-page class="q-pa-md">
        <div class="q-pa-md row items-start q-gutter-md"  >
             <q-select outlined v-model="metodologiaId" :options="lista" label="nombre"  />
           <div class="col-3" v-for="item in lista" :key="item.key"  >   
          <q-card
              class="my-card "           
                  >
              <q-card-section>
              
                <center>     <div class="text-h6">Metodologia</div>   <div class="text-subtitle2">{{item.nombre}}</div></center>
           
              </q-card-section>

              <q-card-section class="q-pt-none">
                  <q-img  src="../../assets/logometo.png" />
              </q-card-section>
              <q-card-actions align="around">
                <q-btn flat @click="Detalle(item.id_metodologia+'-'+item.nombre)">Ver</q-btn>
                <q-btn flat>Borrar</q-btn>
         </q-card-actions>
        </q-card>
        </div>
     </div>
    </q-page>
</template>
<script>

export default {
  name: 'metodologia',
  data(){
      return{
          lista:[],
          metodologiaId:''
      }
  },
  created(){
      this.ListarMetodologia();
  },
  methods:{
      ListarMetodologia(){
         // this.$axios.get()
         let  me=this;
         this.$axios.get('metodologia/Listar/').then(response => {
             console.log(response.data)
                    me.lista = response.data;             
                }).catch(function (error) {
                      console.log(error);
              }) .finally(() => {
         })
      },
      Detalle(item){       
           this.$router.push({name:"fases",params:{item} });        
      }, 
  }
}
</script>
