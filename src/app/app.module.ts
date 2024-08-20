import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarrerasComponent } from './components/admin/carreras/carreras.component';
import { CategoriasComponent } from './components/admin/categorias/categorias.component';
import { EntretenimientoComponent } from './components/entretenimiento/entretenimiento.component';
import { ComidaComponent } from './components/comida/comida.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { LugaresComponent } from './components/admin/lugares/lugares.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    MapaComponent,
    CarrerasComponent,
    CategoriasComponent,
    EntretenimientoComponent,
    ComidaComponent,
    TransporteComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
