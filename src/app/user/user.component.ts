import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../types';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  user!: Signal<User | null>;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }
}
