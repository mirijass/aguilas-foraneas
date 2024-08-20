import { Component } from '@angular/core';
import { Comentario } from '../../models/comentario';
import { Lugares } from '../../models/lugar';
import { ComentariosService } from '../../services/comentarios.service';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrl: './transporte.component.css'
})
export class TransporteComponent {
  
  comentarios:Comentario[]=[]
  comentario:string='';
  lugares:Lugares[]=[];

  //Solo pruebas
  display: any;
  center!: google.maps.LatLngLiteral;   
  zoom = 15;

  markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  
  constructor(private lugaresServices:LugaresService,
      private comentariosServcie: ComentariosService
  ){

  }

  ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.obtenerLugares();
      this.obtenerComentarios();
  }

  obtenerLugares(){
      this.lugaresServices.getLugaresTransporte().subscribe({next:response=>{
          let cordenada:google.maps.LatLngLiteral={
              lat: parseFloat(response[0].latitud), 
              lng: parseFloat (response[0].longitud)
          }
          this.center= cordenada;
          response.forEach(element => {
              let cordenadas:google.maps.LatLngLiteral={
                  lat: parseFloat(element.latitud), 
                  lng: parseFloat (element.longitud)
              }
              this.markerPositions.push(cordenadas);
          });
          
          this.lugares= response;

          console.log(response);
      }});

  }

  obtenerComentarios(){
      this.comentariosServcie.getComentarios().subscribe({next:respose=>{
          console.log(respose);
          this.comentarios= respose;
      }})
  }




  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }


  addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }

  //Solo tiene datos de prueba
  agregarComentario(lugar:Lugares){
      console.log(lugar);
      let idUsuario=localStorage.getItem('idUsuario');
      console.log(localStorage.getItem("idUsuario"))
      let comentario:Comentario={
          aceptado: true,
          comentario: this.comentario,
          id_lugar: lugar.id_lugar,
          id_usuario: idUsuario!
      }
      this.comentariosServcie.createComentario(comentario).subscribe({next: respose=>{
          console.log(respose);
          this.comentario='';

          this.obtenerComentarios();
          
      }})

  }

  marcarLugar(lugar:Lugares){
      console.log(lugar);
      this.markerPositions=[];
      let cordenadas:google.maps.LatLngLiteral={
          lat: parseFloat(lugar.latitud), 
          lng: parseFloat (lugar.longitud)
      }
      this.markerPositions.push(cordenadas);
      this.center= cordenadas;
  }
}
