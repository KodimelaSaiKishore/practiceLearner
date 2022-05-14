import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationRoutingModule } from './application-routing.module';

import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

import { FullComponent } from './layout/full/full.component';

import { BannerComponent } from './shared/banner/banner.component';

import { FooterComponent } from './shared/footer/footer.component';
import { LoginRegisterComponent } from './admin/login-register/login-register.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { EditBlogComponent } from './admin/edit-blog/edit-blog.component';
import { EditMenuComponent } from './shared/edit-menu/edit-menu.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailComponent,
    FullComponent,
    BannerComponent,
    FooterComponent,
    LoginRegisterComponent,
    AddBlogComponent,
    EditBlogComponent,
    EditMenuComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ApplicationModule {}
