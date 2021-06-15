import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserServiceService {
  url = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
     // "Accept-Encoding": "gzip, deflate, br",
     // Authorization: "my-auth-token",
     // Host: "plataforma.utp.edu.co",
     // "Sec-Fetch-Dest": "empty",
      //"Sec-Fetch-Mode": "cors",
      //"Sec-Fetch-Site": "cross-site",
    }),
  };
  constructor(private http: HttpClient) {}

  login(credentials): Observable<any> {
    console.log()
    return this.http.post<any>(
      this.url + `login/token.php?username=${credentials.username}&password=${credentials.password}&service=moodle_mobile_app`,
      credentials,
      this.httpOptions
    );
  }
}
