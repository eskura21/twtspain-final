import { Component, OnInit } from '@angular/core';
import { Twt } from 'src/app/modelos/Twt';
import { TwtterService } from 'src/app/servicios/twtter.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  twts: Twt[];

  constructor(private twtterService: TwtterService) { }

  ngOnInit() {
    this.twtterService.getTwts().subscribe( twts => this.twts = twts );
  }

}
