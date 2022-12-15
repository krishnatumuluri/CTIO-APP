import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL = ''

  public authData:any = null;

  authenticationSubject = new BehaviorSubject(this.authData);


  constructor(private http: HttpClient) {
      this.baseURL = environment.apiURL;
   }

  public AuthRequest(postData:any) : Observable<any> {

    let url = this.baseURL + "api/Login";
    return this.http.post(url,postData);
  }

  public setAuth(loginData:any) {
    this.authData = loginData;
    this.authenticationSubject.next(this.authData);
  }


  public getViolationsByAccountGuid(accountGuid:any) : Observable<any> {
    var uri = this.baseURL + 'account/GetViolations/' + accountGuid;
    return this.http.get(uri);
  }

  public getTransactionsByAccountGuidAndTVNID(accountGuid:any,tvnId:any) : Observable<any> {
    var uri = this.baseURL + 'account/GetAccountTransactions/' + accountGuid + '/' + tvnId;
    return this.http.get(uri);
  }
}
