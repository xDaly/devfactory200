import { Observable } from 'rxjs';
import { ILoginReqDTO } from '../DTOs/login.req';
import { ILoginResDTO } from '../DTOs/login.res';

export interface IAuthentification {
  login(data: ILoginReqDTO): Observable<ILoginResDTO>;
}
