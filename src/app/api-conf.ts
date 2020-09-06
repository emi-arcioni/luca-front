import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ApiConfInterceptor implements HttpInterceptor {

    constructor() { 

      }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = {};
        let req:HttpRequest<any>;
    
        req = request.clone({
            url: environment.apiBaseUrl + request.url,
            setHeaders: headers
        });
        
        return next.handle(req);
    }
}