import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  addBlogForm: any;
  currentdate:any;

  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService
  ) {}


  ngOnInit(): void {
    this.getformattedDate()
    this.addBlogForm = this._formBuilder.group({
      blogAuthor: 'practice learner',
      blogDate: [{value : this.currentdate, disabled: true}, Validators.required],
      heading: ['', Validators.required],
      subHeading: ['', Validators.required],
      image: ['', Validators.required],
      blogDetail: ['', Validators.required],
    });
  }

  addToBlog() {
    if (this.addBlogForm.valid) {
      this._apiService.addBlog(this.addBlogForm.value).subscribe();
      this.ngOnInit();
    }
  }

  datePipe = new DatePipe('en-US');
  getformattedDate(){
    let date = new Date();
    this.currentdate = this.datePipe.transform(date, 'dd-MM-yyyy');
  }
}
