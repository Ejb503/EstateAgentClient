import { Injectable, Inject }    from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CompilerConfig } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

class promise {};

@Injectable() 
export class DataService {
  
  constructor(private http: HttpClient) {}

  createStream(data) : Observable<promise> { 
    var localhost = 'http://localhost:3000/createStream';
    return this.http.post(
      localhost,
      data
    );
  } 

  publishComment(data) : Observable<promise> {
    var localhost = 'http://localhost:3001/publishComment';
    return this.http.post(
      localhost,
      data
    );
  }

  listStreams() : Observable<promise> { 
    var localhost = 'http://localhost:3001/listStreams';
    return this.http.get(localhost);
  } 

  getStream(stream): Observable<promise> { 
    var localhost = 'http://localhost:3001/listStreams/'+stream;
    return this.http.get(localhost);
  } 

  createOffer(stream): Observable<promise> { 
    var localhost = 'http://localhost:3001/createOffer/'+stream;
    return this.http.get(localhost);
  } 



}
