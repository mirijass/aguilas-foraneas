import { Component } from '@angular/core';
import { Categoria } from '../../../models/categorias';
import { CategoriasService } from '../../../services/categorias.service';
import { Lugares } from '../../../models/lugar';
import { LugaresService } from '../../../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrl: './lugares.component.css'
})
export class LugaresComponent {

   //Solo pruebas
   display: any;
   center!: google.maps.LatLngLiteral;   
   zoom = 15;

   markerOptions: google.maps.MarkerOptions = {
       draggable: false
   };
   markerPositions: google.maps.LatLngLiteral[] = [];

  categorias:Categoria[]=[];

  lugarGuardar: Lugares={
    id_lugar: '',
    latitud:'',
    longitud:''
  };

  constructor(private categoriaService:CategoriasService, private lugarService: LugaresService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cargarCategorias();
  }

  cargarCategorias(){
    this.categoriaService.getCategorias().subscribe({next: data=>{
      this.categorias= data;
      console.log(this.categorias)
    }})
  }

    guardarLugar(){

     this.lugarService.createLugare(this.lugarGuardar).subscribe({next:data=>{
      this.lugarGuardar={
        id_lugar: '',
        latitud:'',
        longitud:''
      };
      alert('Lugar guardado con exito')
    }}) 
    }

    addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng != null){
        this.markerPositions.push(event.latLng.toJSON());
        let cordenadas=event.latLng.toJSON()
        this.lugarGuardar.latitud=cordenadas.lat+'';
        this.lugarGuardar.longitud=cordenadas.lng+'';
      } 
  }


}
