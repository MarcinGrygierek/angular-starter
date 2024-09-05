import { Component, Signal } from '@angular/core';
import { User } from '../types';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  user!: Signal<User | null>;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }
}
