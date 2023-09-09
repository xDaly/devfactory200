import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { ILoginResDTO } from '../../DTOs/login.res';
import { VARIABLES } from 'src/app/core/variables.constants';
import { Router } from '@angular/router';
import { RoutesConstants } from 'src/app/core/routes.constants';
import { GeneralService } from 'src/app/features/shared/services/general.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  _authentification = inject(AuthentificationService);
  _general = inject(GeneralService);
  _router = inject(Router);
  loginError: string = '';
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.loginForm.valid) {
      this._authentification.login(this.loginForm.value).subscribe({
        next: (loginRes: ILoginResDTO) => {
          this._general.access_token.next(loginRes.token);
          localStorage.setItem(VARIABLES.ACCESS_TOKEN, loginRes.token);
          this._router.navigate([RoutesConstants.users.routeWithSlash]);
        },
        error: (err) => {
          this.loginError = err.error;
        },
      });
    }
  }
}
