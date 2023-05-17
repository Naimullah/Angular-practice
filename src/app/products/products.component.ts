import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products=[
  {name:'Ali',age:34,available:"Available"},
  {name:'wali',age:55,available:"Not Available"},
  {name:'jam',age:55,available:"Available"},
  {name:'khan',age:55,available:"Not Available"}
]
}
