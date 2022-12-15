import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../services/ApiService';


@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private api: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.api.authData && this.api.authData.SessionId !== '' ) {
      const apiKey =  this.api.authData.SessionId;
      request = request.clone({
          setHeaders: {
              'sessionid': apiKey,
          }
      })
    }


    return next.handle(request);
  }
}
