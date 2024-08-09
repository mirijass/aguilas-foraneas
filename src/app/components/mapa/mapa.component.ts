import { Component } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { ComentariosService } from '../../services/comentarios.service';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {

    comentarios:Comentario[]=[]
    comentario:string='';

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
        this.lugaresServices.getLugares().subscribe({next:response=>{
            let cordenada:google.maps.LatLngLiteral={
                lat: parseFloat(response[0].latitud), 
                lng: parseFloat (response[0].longitud)
            }
            console.log(cordenada)
            this.center= cordenada;
            response.forEach(element => {
                let cordenadas:google.maps.LatLngLiteral={
                    lat: parseFloat(element.latitud), 
                    lng: parseFloat (element.longitud)
                }
                this.markerPositions.push(cordenadas);
            });
            console.log(this.markerPositions)

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
    agregarComentario(){
        let comentario:Comentario={
            aceptado: true,
            comentario: this.comentario,
            id_lugar: "1",
            id_usuario: "1"
        }
        this.comentariosServcie.createComentario(comentario).subscribe({next: respose=>{
            console.log(respose);
            this.comentario='';

            this.obtenerComentarios();
            
        }})

    }

}
