import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { timestamp } from 'rxjs-compat/operator/timestamp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //url=environment.url
   url='https://stopnshop.stackroute.io'
  getUsers() {
    // return this.http.get('http://localhost:9546/api/v2/users');
    return this.http.get(this.url+'/api/v2/users');
  }

  loginUser(userId: any, username: any) {
    return this.http.post(this.url+'/api/v2/messages', {
      userId: userId,
      username: username,
    });
  }
  getAllMessages(from:any,to:any){
    return this.http.get(this.url+'/api/v2/getusermessage/'+from+'/'+to);
  }
}
