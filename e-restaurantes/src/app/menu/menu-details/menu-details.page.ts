import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.page.html',
  styleUrls: ['./menu-details.page.scss'],
})
export class MenuDetailsPage implements OnInit {

  constructor(private activatedRouted: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const recipedId = paramMap.get('placeID');
      console.log(recipedId)
    })
  }

}
