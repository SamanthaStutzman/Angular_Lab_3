import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './app.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url: string = "https://www.reddit.com/r/aww/.json";

  constructor(private httpClient: HttpClient) { }

  // getPosts() : Observable<IPost[]>{
  //   return this.httpClient.get<IPost[]>(this._url);
  // }

  getPosts() {
    return this.httpClient.get(this._url);
  }

}
