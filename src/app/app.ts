import { Component, signal,inject } from '@angular/core';

import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Session } from './services/session';

@Component({
  imports: [ EnTete, PiedPage,RouterLink,RouterLinkActive,RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogue-cours');
  session = inject(Session);
private router = inject(Router);
deconnecter() {
 this.session.deconnecter();
 this.router.navigateByUrl('/');
}
}

