import { Component } from '@angular/core';
import { ProductModel } from '@flatmanagment/ng-core';
import { ProductsService } from '@flatmanagment/ng-data-access';

@Component({
  selector: 'flatmanagment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flatmanagment';

  allProducts:ProductModel[];

  constructor(private productService:ProductsService){
    this.allProducts = [];
  }
}
