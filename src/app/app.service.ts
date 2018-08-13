import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';
import { Component ,OnInit} from '@angular/core';
import { DataStruct } from './DataStruct';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  public _url='http://localhost:3000/rest/api/load';

  constructor(private http:HttpClient) { }
  onInit(){
    this.getData();
  }
  getData():Observable<DataStruct>{
    return this.http.get<DataStruct>(this._url);
  }

  postData(ename:string,eage:number):Observable<any>{
    console.log("Employee Name "+ename);
    console.log("Employee Age  "+eage);
    return this.http.post('http://localhost:3000/rest/api/post',{
      name:ename,
      age:eage
    })
  }
}


