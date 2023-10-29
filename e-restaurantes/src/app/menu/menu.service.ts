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
      descripcion: 'Empresa dedicada al cátering con mayor variedad de productos de Sevilla.',
      nombre: 'Cátering Aljarafe',
      num_tenedores: '1 tenedor',
      imagen_tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/557C/9E86/5282/9F45/9C09/C0A8/2AB9/12B1/placa-senal-xSEC737.jpg',
      comment: ['Buen cátering para grandes eventos.','Comida perfectamente cocinada y servida profesionalmente.','Camareros jóvenes y enérgicos','Comida con poca calidad']

    },
    {
      id: '2',
      imageURL: 'https://content.wepik.com/statics/25806746/preview-page1.jpg',
      descripcion: 'Restaurante Mexicano con comida extra picante.',
      nombre: 'Calaca',
      num_tenedores: '3 tenedores',
      imagen_tenedores: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/8793.png',
      comment: ['La mejor comida mexicana de España.','Las patatas estaban muy bien sazonadas y tienen salsas extra picantes.']

    },
    {
      id: '3',
      imageURL: 'https://uploads.turbologo.com/uploads/design/hq_preview_image/5024304/draw_svg20210702-22412-1wuyj91.svg.png',
      descripcion: 'Restaurante con pollos asados al instante.',
      nombre: 'Rooster',
      num_tenedores: '2 tenedores',
      imagen_tenedores: 'https://www.casaldoumia.com/wp-content/uploads/2021/06/placa-restaurante-2-tenedores-2.jpg',
      comment: ['Restaurante especializado en pollos.','En menos de un minuto ya tenía mi pollo asado.','El lugar está un poco descuidado y sucio.']

    },
    {
      id: '4',
      imageURL: 'https://media-cdn.tripadvisor.com/media/photo-p/1c/88/6a/a5/logo.jpg',
      descripcion: 'Marisco directo del mar a tu plato.',
      nombre: 'Marisquería del Edén',
      num_tenedores: '1 tenedor',
      imagen_tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/557C/9E86/5282/9F45/9C09/C0A8/2AB9/12B1/placa-senal-xSEC737.jpg',
      comment: ['Marisquería con los productos más frescos.','El marisco llegó vivo al plato de lo fresco que estaba.','Está muy bien pero no tienen servicio a domicilio.']

    },
    {
      id: '5',
      imageURL: 'https://www.roblesaljarafe.es/thumbnail_image_roblesaljarafe_full_739.png',
      descripcion: 'Exponente de la cocina sevillana y andaluza.',
      nombre: 'Robles',
      num_tenedores: '3 tenedores',
      imagen_tenedores: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/8793.png',
      comment: ['Preparado para grandes eventos.','Celebré mi boda aquí y fue la boda de mis sueños.']

    },

  ]
  constructor() { }

  getTenedores(num_tenedores: String){
    return {
      if (num_tenedores=1) {
       
      },
      elsif(num_tenedores=2){

      },
      else(num_tenedores=3) {
        
      }
    }
  }
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
  getPlace(placeID: string |null) {
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
