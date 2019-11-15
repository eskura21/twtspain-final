import { Component, OnInit } from '@angular/core';
import { TwtterComponent } from '../twtter/twtter.component';
import { TwtterService } from 'src/app/servicios/twtter.service';
import { Perfil } from 'src/app/modelos/perfil';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  perfiles: Perfil[];

  constructor(private twtterService: TwtterService) { }

  ngOnInit() {
    this.twtterService.getPerfiles().subscribe(
      perfiles => this.perfiles = perfiles
    );
  }

}
