import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { CarrerasComponent } from './components/admin/carreras/carreras.component';
import { CategoriasComponent } from './components/admin/categorias/categorias.component';
import { ComidaComponent } from './components/comida/comida.component';
import { EntretenimientoComponent } from './components/entretenimiento/entretenimiento.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { LugaresComponent } from './components/admin/lugares/lugares.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'comida',
    component: ComidaComponent
  },
  {
    path: 'entretenimiento',
    component: EntretenimientoComponent
  },
  {
    path: 'transporte',
    component: TransporteComponent
  },
  {
    path: 'admin/carreras',
    component: CarrerasComponent
  },
  {
    path: 'admin/categorias',
    component: CategoriasComponent
  },
  {
    path: 'admin/lugares',
    component: LugaresComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
