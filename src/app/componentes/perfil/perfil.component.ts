import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/modelos/perfil';
import { TwtterService } from 'src/app/servicios/twtter.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: Perfil;

  constructor(
    private twtterService: TwtterService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      map => {
        let id = +map.get('id');
        console.log(id);

        if (id === 0) {
          id = 1;
        }

        this.twtterService.getPerfil(id).subscribe(perfil => {
          if (perfil) {
            this.perfil = perfil;
          } else {
            this.snackBar.open('No se ha encontrado el perfil solicitado', 'OK');
          }
        });
      }
    );
  }

}
