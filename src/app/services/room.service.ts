import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseURI = 'http://localhost:8080/hayaservices';
  basePublicURI = 'http://localhost:8080/hayaservices/nkaso';
  headers= new HttpHeaders( {
    "Content-Type":"application/json"
  });
  constructor(private http: HttpClient) { }

  findAllRooms(cid:number): Observable<Room[]> {
    const url=`${this.basePublicURI}/rooms`;
    console.log(url);
    return this.http.get<Room[]>(url);
  }
}
