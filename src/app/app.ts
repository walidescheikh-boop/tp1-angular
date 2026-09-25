import { Component, signal } from '@angular/core';

import { ListeCours } from './composants/liste-cours/liste-cours';
import {EnTete} from './composants/en-tete/en-tete';
import {PiedPage} from './composants/pied-page/pied-page';

@Component({
  imports: [ListeCours,EnTete,PiedPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogue-cours');
}
