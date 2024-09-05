import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public get<T>(url: string) {
    return this.http.get<T>(`${this.API_URL}/${url}`).pipe(
      retry(3),
      catchError((err) => {
        return err;
      }),
    );
  }
}
