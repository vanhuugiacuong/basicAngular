import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { ProductModel } from '../../models/product.models';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-detail',
  imports: [MatCardModule, HeaderComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  product?: ProductModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.product = this.productService.getProducts().find((p) => p.id === id);
    console.log('Product Details:', this.product);
  }

  addToCart(product: ProductModel): void {
    this.productService.addProductToCart(product);
    console.log('Product added to cart:', product);
  }
}