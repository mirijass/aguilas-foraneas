import { Component } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {

    comentarios:string[]=['Buen internet']
    comentario:string='';

  //Solo pruebas
display: any;
center: google.maps.LatLngLiteral = {
    lat: 21.146695311123533,
    lng: -100.93134946431617
};
center2: google.maps.LatLngLiteral = {
    lat: 22.146695311123533,
    lng: -100.93134946431617
};
zoom = 15;
moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
}
move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
}


markerOptions: google.maps.MarkerOptions = {
    draggable: false
};
markerPositions: google.maps.LatLngLiteral[] = [this.center, this.center2];
addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
    }

    agregarComentario(){
        this.comentarios.push(this.comentario);
        this.comentario='';
    }

}
