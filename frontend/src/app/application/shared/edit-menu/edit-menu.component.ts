import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  constructor( private _activatedRoute:ActivatedRoute) { }
  menuToggler :boolean = false;
  blogEditer : string = 'disabled';

  ngOnInit(): void {
    this.menuToggler  = false;
    this.blogEditer = 'disabled'
  }

  menuToggle(){
    this.menuToggler = !this.menuToggler;
  }

}
