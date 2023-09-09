import { Component } from '@angular/core';
import { GeneralService } from './features/shared/services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '200factoryTest';
  constructor(private _general: GeneralService) {}
}
