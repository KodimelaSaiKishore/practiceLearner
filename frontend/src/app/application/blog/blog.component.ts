import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/models/blog-type';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogData:any;

  constructor( private _http:HttpClient, private _apiService:ApiService) { }

  ngOnInit(): void {
    this._apiService.getBlogs().subscribe(result =>{
      this.blogData = result;
    });
  }

}
