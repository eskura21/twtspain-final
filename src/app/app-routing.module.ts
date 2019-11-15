import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AppComponent } from './app.component';
import { TwtterComponent } from './componentes/twtter/twtter.component';


const routes: Routes = [
  { path: '', redirectTo: '/perfil', pathMatch: 'full' },
  { path: 'perfil', component: TwtterComponent },
  { path: 'perfil/:id', component: TwtterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
