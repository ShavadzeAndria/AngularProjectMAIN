import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Menu } from '../models/menu';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']

})
export class MenuComponent {
  constructor(private http:ServicesService){}
  ngOnInit(){
    this.http.getMenu().subscribe(resp => {
      console.log(resp)
      this.menuArr = resp;
      console.log(this.menuArr)
    })
  }
  menuArr:Menu[]=[];
}