import { Injectable, signal, WritableSignal } from '@angular/core';
import { User } from './types';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: WritableSignal<User | null> = signal(null);
  public readonly user = this._user.asReadonly();

  public fetchUserData() {
    this._user.set({
      name: 'Lorem ipsum',
    });

    // To highlight that OnPush components are rerendering correctly
    timer(2000).subscribe(() => {
      this._user.set({
        name: 'Dolor sit amet',
      });
    });
  }
}
