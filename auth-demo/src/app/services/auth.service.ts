import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)).map(response => {
        let result = response.json();

        if (result && result.token) {
          localStorage.setItem('token', result.token)
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;
    return new JwtHelper().decodeToken(token);
  }

  isLoggedIn() {

    return tokenNotExpired(); // This function does the same thing as below lines of code 

   /* let jwtHelper = new JwtHelper();

    let token = localStorage.getItem('token');

    if (!token)
    return false;

    let expiration = jwtHelper.getTokenExpirationDate(token);
    let isTokenExpired = jwtHelper.isTokenExpired(token);

    return !isTokenExpired; */
  }
}

