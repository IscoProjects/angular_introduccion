import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titulo: string = 'App de Ejemplo';
  numero: number = 0;
  base: number = 5;
  resultado: number = 0;

  actualizar(value: number): number {
    return this.numero += value;
  }

  acumulador(value: number): number{
    return this.resultado += value;
  }

}
