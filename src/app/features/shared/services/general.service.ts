import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VARIABLES } from 'src/app/core/variables.constants';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  access_token: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {
    this.getTokenFromStorage();
  }

  getTokenFromStorage() {
    const access_token: string = localStorage.getItem(
      VARIABLES.ACCESS_TOKEN
    ) as string;
    this.access_token.next(access_token);    
  }
}
