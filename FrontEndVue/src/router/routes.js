
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { name:'metodologia', path: 'metodologia', component: () => import('pages/Metodologia/Metodologia.vue')},
      { name: "fases",path: 'fases/:item', component: () => import('pages/Fases/Fases.vue') },
      { name: "elemento",path: 'elemento', component: () => import('pages/Elemento/Elemento.vue') },
      { name: "proyectolista",path: 'proyectolista', component: () => import('pages/Proyecto/ProyectoLista.vue') },
      { name: "proyectodetalle",path: 'proyectodetalle/:id_proyecto', component: () => import('pages/Proyecto/ProyectoDetalle.vue') },
      { name: "proyectonuevo",path: 'proyectonuevo', component: () => import('pages/Proyecto/ProyectoNuevo.vue') }
    
    ]
  },

  // Always leave this as last one,
  // but you can also remove it  path: '/alumnos/editar/:id',
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  //   path: 'fases/:item',
]

export default routes
