import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListService } from '../service/list.service';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(private listService: ListService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.listService.show();
    return next.handle(request).pipe(
      delay(500),
      finalize(() => this.listService.hide()),
    );
  }
}
