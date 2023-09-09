import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from './core/routes.constants';
import { NgAuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesConstants.users.route,
    pathMatch: 'full',
  },
  {
    path: RoutesConstants.auth.route,
    loadComponent: () =>
      import(
        './features/authentification/authentification-navigator/authentification-navigator.component'
      ).then((c) => c.AuthentificationNavigatorComponent),
    children: [
      {
        path: '',
        redirectTo: RoutesConstants.login.route,
        pathMatch: 'prefix',
      },
      {
        path: RoutesConstants.login.route,
        title: RoutesConstants.login.title,
        loadComponent: () =>
          import(
            './features/authentification/containers/login/login.component'
          ).then((c) => c.LoginComponent),
      },
    ],
  },
  {
    path: RoutesConstants.users.route,
    loadComponent: () =>
      import('./features/users/users-navigator/users-navigator.component').then(
        (c) => c.UsersNavigatorComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/users/containers/users-display/users-display.component'
          ).then((c) => c.UsersDisplayComponent),
      },
    ],
    canActivate: [NgAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
