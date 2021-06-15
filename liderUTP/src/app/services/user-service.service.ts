import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = environment.baseUrl;
  constructor(private http: HttpClient, ) {    
   }

   login(credentials): Observable<any> {
    return this.http.post<any>( this.url+'login/token.php', credentials);
  }

}
