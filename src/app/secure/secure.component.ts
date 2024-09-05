import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-secure',
  standalone: true,
  imports: [UserComponent, HeaderComponent],
  templateUrl: './secure.component.html',
  styleUrl: './secure.component.scss',
})
export class SecureComponent implements OnInit {
  ngOnInit(): void {
    const data = 'Lorem ipsum';
  }
}
