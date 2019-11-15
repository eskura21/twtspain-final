import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { NuevoComponent } from './componentes/nuevo/nuevo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TwtterComponent } from './componentes/twtter/twtter.component';
import { PerfilesComponent } from './componentes/perfiles/perfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    BuscadorComponent,
    ListadoComponent,
    NuevoComponent,
    TwtterComponent,
    PerfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
