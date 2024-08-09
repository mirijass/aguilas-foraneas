import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  correo: string='';
  password: string ='';

  constructor(private router:Router, private usuarioService:UsuariosService){

  }

  login(){
    console.log(`Correo: ${this.correo} \nContraseña: ${this.password}`)

    if(this.correo==''){
      alert("Ingresa un correo")
      return;
    }
    let usuario={
      email: this.correo, 
      contrasena: this.password
    }
    this.usuarioService.loginUsuario(usuario).subscribe({next: response=>{
      this.router.navigate(['/inicio'])

    }, error: error=>{
      alert("Usuario o contraseña incorrectas")
    }})

  }

  registrarUsuario(){
    this.router.navigate(['/registro'])
  }
}
