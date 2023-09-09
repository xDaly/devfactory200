import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-navigator',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users-navigator.component.html',
  styleUrls: ['./users-navigator.component.css']
})
export class UsersNavigatorComponent {

}
