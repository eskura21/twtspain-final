import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Javier', 'Pepe', 'Juan'];

  constructor() { }

  ngOnInit() {
  }

}
