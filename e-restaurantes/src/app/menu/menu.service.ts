import { Injectable } from '@angular/core';
import { lista } from './menu.model'

@Injectable({
  providedIn: 'root'
})

export class MenuDetailsService {
  private listRestaurant: lista[] = [
    {
      id: '1',
      imageURL: 'https://img.freepik.com/vector-premium/logotipo-diseno-alimentos-calidad-catering_187482-593.jpg',
      nombre: 'Catering Aljarafe',
      num_tenedores: '3',
      comment: ['Buen catering para grandes eventos']

    },
    {
      id: '2',
      imageURL: 'https://content.wepik.com/statics/25806746/preview-page1.jpg',
      nombre: 'Calaca',
      num_tenedores: '1',
      comment: ['La mejor comida mexicana de España']

    },
    {
      id: '3',
      imageURL: 'https://uploads.turbologo.com/uploads/design/hq_preview_image/5024304/draw_svg20210702-22412-1wuyj91.svg.png',
      nombre: 'Rooster',
      num_tenedores: '2',
      comment: ['Restaurante especializado en pollos']

    },
    {
      id: '4',
      imageURL: 'https://media-cdn.tripadvisor.com/media/photo-p/1c/88/6a/a5/logo.jpg',
      nombre: 'Venta Pazo',
      num_tenedores: '1',
      comment: ['Marisquería con los productos más frescos']

    },
    {
      id: '5',
      imageURL: 'https://www.roblesaljarafe.es/thumbnail_image_roblesaljarafe_full_739.png',
      nombre: 'Robles',
      num_tenedores: '3',
      comment: ['Preparado para grandes eventos ']

    },

  ]
  constructor() { }
  /**
   * getPlaces()
   * @returns Devuelve el array completo de elementos
   */
  getPlaces() {
    return [...this.listRestaurant]
  }
  /**
   *getPlace(): Recupera el valor del array que se pulse
   * @param placeID (Identificador del objeto que se ha pulsado) 
   */
  getPlace(placeID: string) {
    return {
      ...this.listRestaurant.find(lista => { return lista.id === placeID })
    }
  }
  /**
   * addPlace() : añade un obejeto nuevo al final del array places
   * @param title Será el titulo del objetp
   * @param imageURL Sera la imagen del objeto
   */
  /*addPlace(nombre: string, imageURL: string) {
this.listRestaurant.push({
  nombre,
  imageURL,
  comment:[],
  id:(this.listRestaurant.length+1).toString()
})
  }*/
  deletePlace(placeId: string) {
    this.listRestaurant = this.listRestaurant.filter(lista => { return lista.id != placeId })

  }
}
