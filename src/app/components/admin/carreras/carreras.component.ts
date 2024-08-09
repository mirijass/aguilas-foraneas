import { Component } from '@angular/core';
import { Carrera } from '../../../models/carrera';
import { CarrerasService } from '../../../services/carreras.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrl: './carreras.component.css'
})
export class CarrerasComponent {

  carreras:Carrera[]=[];

  carreraGuardar: Carrera={
    nombre:''
  };

  constructor(private carrerasService:CarrerasService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cargarCarreras();
  }

  cargarCarreras(){
    this.carrerasService.getCarreras().subscribe({next: data=>{
      this.carreras= data;
    }})
  }

    guardarCarrera(){

     this.carrerasService.createCarrera(this.carreraGuardar).subscribe({next:data=>{
      this.carreraGuardar.nombre="";
      this.cargarCarreras();
     }}) 
    }
}
