import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/user/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/user/login-usuario';
import { JwtDto } from '../models/user/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://belenag-portfolio.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}