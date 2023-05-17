import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
slogan:string="Your one stop shop";
source:string="/assets/images.jpg";
getSlogan(){
  return 'This is new Slogan for application';
}
}
