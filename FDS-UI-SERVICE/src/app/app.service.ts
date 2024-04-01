import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private httpClient: HttpClient;
  constructor(  private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
   }

  public loginUser(reqData: any){
    // const url = CommonConstants.APIURL.login;
    return this.httpClient.post(url, reqData);
  }
}
