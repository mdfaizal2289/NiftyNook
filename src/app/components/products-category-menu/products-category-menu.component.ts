import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-category-menu',
  templateUrl: './products-category-menu.component.html',
  styleUrls: ['./products-category-menu.component.css']
})
export class ProductsCategoryMenuComponent implements OnInit{

  productCategories: ProductCategory[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategories();
    
  }
  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
      
  }

}
