import { Injectable, inject } from '@angular/core';
import { IAuthentification } from './iauthentification';
import { Observable } from 'rxjs';
import { ILoginReqDTO } from '../DTOs/login.req';
import { HttpClient } from '@angular/common/http';
import { LOGIN_API } from 'src/app/core/api.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService implements IAuthentification {
  _http = inject(HttpClient);
  constructor() {}
  login(data: ILoginReqDTO): Observable<any> {
    return this._http.post(LOGIN_API,  data );
  }
}
