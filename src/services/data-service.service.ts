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
  host: string = 'http://portal.theline.digital/proxy/';

  constructor(private http: HttpClient) {}

  createStream(data) : Observable<promise> { 
    return this.http.post(
      this.host+'createStream',
      data
    );
  } 

  publishComment(data) : Observable<promise> {
    return this.http.post(
      this.host+'publishComment',
      data
    );
  }

  listStreams() : Observable<promise> { 
    return this.http.get(this.host+'listStreams');
  } 

  getStream(stream): Observable<promise> { 
    return this.http.get(this.host+'listStreams/'+stream);
  } 

  createOffer(stream): Observable<promise> { 
    return this.http.get(this.host+'createOffer/'+stream);
  } 

}
