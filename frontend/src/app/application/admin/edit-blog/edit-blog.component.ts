import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
})
export class EditBlogComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _activatedRoute: ActivatedRoute,
    private _router:Router
  ) {}

  editBlogForm = this._formBuilder.group({
    blogAuthor: ['', Validators.required],
    blogDate: ['', Validators.required],
    heading: ['', Validators.required],
    subHeading: ['', Validators.required],
    image: ['', Validators.required],
    blogDetail: ['', Validators.required],
  });
  id: any;

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this._apiService.getBlogDetails(this.id).subscribe((data) => {
      this.editBlogForm = this._formBuilder.group({
        id : this.id,
        blogAuthor: [data.blogAuthor, Validators.required],
        blogDate: [data.blogDate, Validators.required],
        heading: [data.heading, Validators.required],
        subHeading: [data.subHeading, Validators.required],
        image: [data.image, Validators.required],
        blogDetail: [data.blogDetail, Validators.required],
      });
    });
  }

  editBlogDetails() {
    this._apiService.editBlog(this.editBlogForm.value, this.id).subscribe();
    // console.log(this.editBlogForm.value);
  }
  backToDetails(){
    this._router.navigate(['/blogDetail',this.id]);
  }
}
