import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  nombre: string = 'Ironman';
  edad: number = 40;

  constructor() { }

  ngOnInit(): void {
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad += 5;
  }

}
