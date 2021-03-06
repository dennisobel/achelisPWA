import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';



@Injectable()
export class HttpProvider {
  private offline = {
    bookserviceURL:"http://localhost:3000/bookservice",
    rentalURL:"http://localhost:3000/rental",
    buyspareURL:"http://localhost:3000/buyspare",
    profileURL:"http://localhost:3000/profile",
  }

  private online = {
    bookserviceURL:"https://achelisserver.herokuapp.com/bookservice",
    rentalURL:"https://achelisserver.herokuapp.com/rental",
    buyspareURL:"https://achelisserver.herokuapp.com/buyspare",
    profileURL:"https://achelisserver.herokuapp.com/profile",    
  }



  constructor(public http: Http) {}

  buyspare(body){
    console.log(body)
    let headers = new Headers()
    headers.set("Accept","application/json")
    headers.set("Content-Type","application/json");

    return this.http.post(this.online.buyspareURL,body, {headers})
      .map(res => res.json())
  }

  bookservice(body){
    console.log(body)
    let headers = new Headers()
    headers.set("Accept","application/json")
    headers.set("Content-Type","application/json");
    
    return this.http.post(this.online.bookserviceURL,body,{headers})
      .map(res => res.json())
  }

  rental(body){
    console.log(body)
    let headers = new Headers()
    headers.set("Accept","application/json")
    headers.set("Content-Type","application/json");
    
    return this.http.post(this.online.rentalURL,body,{headers})
      .map(res => res.json())
  }

  postProfile(body){
    let headers = new Headers()
    headers.set("Accept","application/json")
    headers.set("Content-Type","application/json");
    return this.http.post(this.online.profileURL,body,{headers})
      .map(res => res.json())


  }

}
