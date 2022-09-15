import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  URLedu = 'https://belenag-portfolio.herokuapp.com/education/';

  constructor(private httpEdu: HttpClient) { }

  public listEducation(): Observable<Education[]>{
    return this.httpEdu.get<Education[]>(this.URLedu + 'list');

  }
  public addEducation(education: Education): Observable<any>{
    return this.httpEdu.post<any>(this.URLedu + 'add', education);
 
  }
  public editEducation(education: Education): Observable<any>{
    return this.httpEdu.put<any>(this.URLedu + 'edit', education);

}
  public deleteEducation(id: number): Observable<any>{
    return this.httpEdu.delete<any>(this.URLedu + `delete/${id}`);
  }
  public findEducation(id: number): Observable<any>{
    return this.httpEdu.get<Education>(this.URLedu + `find/${id}`);
}
}