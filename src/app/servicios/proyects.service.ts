import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyects } from '../models/proyects/proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  URLproy = 'https://belenag-portfolio.herokuapp.com/proyects/';

  constructor(private httpProy : HttpClient) { }

  public listProyects(): Observable<Proyects[]>{
    return this.httpProy.get<Proyects[]>(this.URLproy + 'list');

  }
  public addProyects(proyects: Proyects): Observable<any>{
    return this.httpProy.post<any>(this.URLproy + 'add', proyects);
 
  }
  public editProyects(proyects: Proyects): Observable<any>{
    return this.httpProy.put<any>(this.URLproy + 'edit', proyects);

}
  public deleteProyects(id: number): Observable<any>{
    return this.httpProy.delete<any>(this.URLproy + `delete/${id}`);
  }
  public findProyects(id: number): Observable<any>{
    return this.httpProy.get<Proyects>(this.URLproy + `find/${id}`);

}

}
