import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class DataService {
private baseurl= `../../assets/jsonData/`;
  constructor(private http: HttpClient) { }

  // public getProfile(): Observable<any>{
  //   return this.http.get(this.baseurl).pipe(map((response: any) => response.json()));
  // }
 
  getProfile (): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + `profile.json`)
  }
  getFollowing(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + `following.json`)

  }

  getFollowers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + `followers.json`)

  }

  getRepository(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + `repositories.json`)

  }
}
