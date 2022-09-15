import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  URLexp = 'https://belenag-portfolio.herokuapp.com/experience/';

  constructor(private httpExp: HttpClient) { }

  public listExperience(): Observable<Experience[]>{
    return this.httpExp.get<Experience[]>(this.URLexp + 'list');

  }
  public addExperience(experience: Experience): Observable<any>{
    return this.httpExp.post<any>(this.URLexp + 'add', experience);
 
  }
  public editExperience(experience: Experience): Observable<any>{
    return this.httpExp.put<any>(this.URLexp + 'edit', experience);

}
  public deleteExperience(id: number): Observable<any>{
    return this.httpExp.delete<any>(this.URLexp + `delete/${id}`);
  }
  public findExperience(id: number): Observable<any>{
    return this.httpExp.get<Experience>(this.URLexp + `find/${id}`);

}
 }
