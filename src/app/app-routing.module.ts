import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuardGuard } from './login/guard.guard';
import { SimpleLoadingStrategy } from './selective-loading-strategy.service'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('./home/home.module').then( m => m.HomePageModule) , canActivate : [AuthGuard],
        data: {preload: true}    
      }
    ]   
  },
  {
    path: 'perfil',
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./perfil/perfil.module').then( m => m.PerfilPageModule),
        data: {preload: true}
      }
    ]
  }, 
  {
    path: 'pesquisar',
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./pesquisar/pesquisar.module').then( m => m.PesquisarPageModule),
        data: {preload: true}
      }
    ]
  },
  
  
  { path: 'add',
   loadChildren: () => 
   import('./novo-evento/novo-evento.module').then( m => m.NovoEventoPageModule)

},
  {
    path: 'criar-user',
    loadChildren: () => import('./criar-user/criar-user.module').then( m => m.CriarUserPageModule)
  },
  {
    path: 'criar',
    loadChildren: () => import('./criar/criar.module').then( m => m.CriarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) , canActivate : [GuardGuard]
  },
  {
    path: 'eventomodal',
    loadChildren: () => import('./eventomodal/eventomodal.module').then( m => m.EventomodalPageModule)
  },
  {
    path: 'proximo-evento',
    loadChildren: () => import('./eventos-do-usuario/proximo-evento.module').then( m => m.ProximoEventoPageModule)
  },
  {
    path: 'editar-modal',
    loadChildren: () => import('./editar-modal/editar-modal.module').then( m => m.EditarModalPageModule)
  },
  {
    path: 'usuario-pesquisa/:uid',
    loadChildren: () => import('./usuario-pesquisa/usuario-pesquisa.module').then( m => m.UsuarioPesquisaPageModule)
  },
  {
    path: 'evento-pesquisa/:chave',
    loadChildren: () => import('./evento-pesquisa/evento-pesquisa.module').then( m => m.EventoPesquisaPageModule)
  },
  {
    path: 'share/:chave',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
    
];
  
@NgModule({
  providers: [SimpleLoadingStrategy],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}