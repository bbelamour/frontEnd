import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URLpers = 'https://belenag-portfolio.herokuapp.com/people/'//aca va la ruta para poder hacer el http request.
 

  constructor(private httpPers: HttpClient) { }

  public listPerson(): Observable<Person[]>{
    return this.httpPers.get<Person[]>(this.URLpers + 'list');
   }
   public editPerson(person: Person): Observable<any>{
    return this.httpPers.put<any>(this.URLpers + 'edit', person);
   }
   public addPerson(person: Person): Observable<any>{
    return this.httpPers.post<any>(this.URLpers + 'add', person);
  }
}