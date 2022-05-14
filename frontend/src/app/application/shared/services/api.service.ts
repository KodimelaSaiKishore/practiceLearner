import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog-type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = environment.api + "/blogs";

  constructor( private _http:HttpClient) { }

  getBlogs():Observable<Blog>{
    return this._http.get<Blog>(this.api);
  }
  getBlogDetails(id:number):Observable<Blog>{
    return this._http.get<Blog>(this.api+"/"+id);
  }

  addBlog(data:any){
    return this._http.post<Blog>(this.api, data);
  }

  editBlog(data:Blog, id:number){
    return this._http.put<Blog>(this.api+'/'+ id, data);
  }

  deleteBlog(id:number){
    return this._http.delete(this.api+'/'+id);
  }
}
