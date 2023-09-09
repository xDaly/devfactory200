import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { User } from '../../models/user.model';

const ELEMENT_DATA: User[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
];
@Component({
  selector: 'app-users-display',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css'],
})
export class UsersDisplayComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
