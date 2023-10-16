import { Component, OnInit } from '@angular/core';
import { MenuDetailsService } from './menu.service';
import { lista } from './menu.model'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

protected titulo= "Lista de Restaurantes"

listRestaurant: lista[] = [];
  constructor(private  menuDeteilSer: MenuDetailsService ) { }

  ngOnInit() {
    this.listRestaurant = this.menuDeteilSer.getPlaces();
  }

}
