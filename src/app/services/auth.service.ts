import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL_REGISTER = 'http://localhost/mi_api/register.php';
  private API_URL_LOGIN = 'http://localhost/mi_api/login.php';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post<any>(this.API_URL_REGISTER, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.API_URL_LOGIN, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
