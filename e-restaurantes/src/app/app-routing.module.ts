import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    children:
    [
      {
        path:"",
        loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
      },
      {
        path:":placeID",
        loadChildren: () => import('./menu/menu-details/menu-details.module').then( m => m.MenuDetailsPageModule)
      }
      
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
