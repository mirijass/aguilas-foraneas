import { Router } from '@angular/router';
import { UsuariosService } from './../../../services/usuarios.service';
import { Component } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { CarrerasService } from '../../../services/carreras.service';
import { Carrera } from '../../../models/carrera';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  usuarioRegistrar: Usuario={};
  carreras: Carrera[]=[];

  constructor(private router:Router, private usuarioService:UsuariosService,
    private carrerasService: CarrerasService
  ){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cargarCarreas();
  }

  cargarCarreas(){
    this.carrerasService.getCarreras().subscribe({next: data=>{
      this.carreras= data;
    }})
  }

  registrarUsuario(){
    this.usuarioRegistrar.tipo_usuario="1";
    this.usuarioService.createUsuario(this.usuarioRegistrar).subscribe({next:data=>{
      console.log(data);
      this.router.navigate(['/login'])

    }})
  }

}
