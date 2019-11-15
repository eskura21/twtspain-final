import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Perfil } from '../modelos/perfil';
import { HttpClient } from '@angular/common/http';
import { Twt } from '../modelos/Twt';
import { catchError, throwIfEmpty } from 'rxjs/operators';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class TwtterService {

  private url = 'http://localhost:3000/';
  private urlPerfiles = this.url + 'perfiles/';
  private urlTwts = this.url + 'twts/';

  constructor(private http: HttpClient) { }

  getPerfiles(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.urlPerfiles);
  }

  getPerfil(id: number): Observable<Perfil> {
    return this.http.get<Perfil>(this.urlPerfiles + id).pipe(
      catchError( () => {
        console.error('ERROR AL PEDIR EL ID ' + id);
        return of(null);
      })
    );
  }

  getTwts(): Observable<Twt[]> {
    return this.http.get<Twt[]>(this.urlTwts);
  }

  addTwt(texto: string): Observable<Twt> {
    return this.http.post<Twt>(this.urlTwts, {texto});
  }
}
