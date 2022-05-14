import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  id: any;
  blogDetails: any;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _apiService:ApiService
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this._apiService.getBlogDetails(this.id).subscribe(result =>{
      this.blogDetails = result
    });
  }
}
