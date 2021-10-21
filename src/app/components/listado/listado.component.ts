import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Batman', 'Superman', 'WonderWoman', 'Flash', 'Acuaman'];
  deletedHeroe: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deletedHeroe = this.heroes.shift() || '';
    //this.heroes.splice(0,1);
  }

}
