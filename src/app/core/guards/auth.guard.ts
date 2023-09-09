import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { GeneralService } from 'src/app/features/shared/services/general.service';
import { RoutesConstants } from '../routes.constants';

@Injectable({ providedIn: 'root' })
export class NgAuthGuard {
  _generalServices = inject(GeneralService);
  _router = inject(Router);
  access_token!: string;

  constructor() {
    this._generalServices.access_token.subscribe((token: string) => {
      this.access_token = token;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.access_token) {
      return true;
    } else {
      this._router.navigate([RoutesConstants.auth.routeWithSlash]);
      return false;
    }
  }
}
