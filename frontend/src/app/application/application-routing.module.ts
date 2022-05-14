import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { EditBlogComponent } from './admin/edit-blog/edit-blog.component';
import { LoginRegisterComponent } from './admin/login-register/login-register.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { FullComponent } from './layout/full/full.component';

const routes: Routes = [
  {
    path:"", component:FullComponent, children:[
      {
        path:'home', component:BlogComponent
      },
      {
        path:'blogDetail/:id', component:BlogDetailComponent
      },
      {
        path: 'admin/login', component:LoginRegisterComponent
      },
      {
        path: 'admin/add-blog', component:AddBlogComponent
      },
      {
        path: 'admin/edit-blog/:id', component:EditBlogComponent
      },
      {
        path:'**', redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
