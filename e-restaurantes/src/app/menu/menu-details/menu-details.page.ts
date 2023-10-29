import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{MenuDetailsService} from '../menu.service';
import { lista } from '../menu.model';
@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.page.html',
  styleUrls: ['./menu-details.page.scss'],
})
export class MenuDetailsPage implements OnInit {
  lista: lista={id:'',nombre: '',imageURL:'',descripcion:'',imagen_tenedores:'',num_tenedores:'',comment:[]};
  constructor(private activatedRouted: ActivatedRoute, private menuDetService:MenuDetailsService) { }
  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const recipedId = paramMap.get('placeID'); 
      this.lista= this.menuDetService.getPlace(recipedId);  
    })
  }
}