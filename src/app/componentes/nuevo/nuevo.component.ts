import { Component } from '@angular/core';
import { TwtterService } from 'src/app/servicios/twtter.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  constructor(private twtterService: TwtterService) { }

  onEnviar(texto: string) {
    console.log(texto);

    this.twtterService.addTwt(texto).subscribe(
      twt => console.log(twt)
    );
  }
}
