import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  isLoading = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getUsers(page: number, count: number): Observable<any> {
    const options = {
      params: {
        page: `${page}`,
        per_page: `${count}`,
      },
    };
    return this.http.get('https://reqres.in/api/users', options);
  }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
