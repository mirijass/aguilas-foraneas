import { Component } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { Categoria } from '../../../models/categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  categorias:Categoria[]=[];

  categoriaGuardar: Categoria={
    nombre_categoria:''
  };

  constructor(private categoriaService:CategoriasService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cargarCategorias();
  }

  cargarCategorias(){
    this.categoriaService.getCategorias().subscribe({next: data=>{
      this.categorias= data;
    }})
  }

    guardarCategoria(){

     this.categoriaService.createCategoria(this.categoriaGuardar).subscribe({next:data=>{
      this.categoriaGuardar.nombre_categoria="";
      this.cargarCategorias();
     }}) 
    }

}
