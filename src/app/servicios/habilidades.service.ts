import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills/skills';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  
  URLskills = 'https://belenag-portfolio.herokuapp.com/skills/';

  constructor(private httpSkills: HttpClient) { }

  public listSkills(): Observable<Skills[]>{
    return this.httpSkills.get<Skills[]>(this.URLskills + 'list');

  }
  public addSkill(skills: Skills): Observable<any>{
    return this.httpSkills.post<any>(this.URLskills + 'add', skills);
 
  }
  public editSkill(skills: Skills): Observable<any>{
    return this.httpSkills.put<any>(this.URLskills + 'edit', skills);

}
  public deleteSkill(id: number): Observable<any>{
    return this.httpSkills.delete<any>(this.URLskills + `delete/${id}`);
  }
  public findSkills(id: number): Observable<any>{
    return this.httpSkills.get<Skills>(this.URLskills + `find/${id}`);

}

  
}
