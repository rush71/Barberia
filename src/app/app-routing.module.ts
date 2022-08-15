import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CortesComponent } from './components/cortes/cortes.component';
import { CreateCorteComponent } from './components/create-corte/create-corte.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'cortes', component: CortesComponent },
  { path: 'createCorte', component: CreateCorteComponent },
  { path: 'editCorte/:id', component: CreateCorteComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
