import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../models/product.models';
import { ProductService } from '../../service/product/product.service';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: ProductModel;

  constructor(private router: Router, private productService: ProductService) {}

  goToDetail(productId: string) {
    this.router.navigate(['/detail', productId]).then(() => {});
  }
  addToCart() {
    const updatedCart = this.productService.addProductToCart(this.product);
    console.log('Product added to cart:', this.product);
    console.log('Updated cart:', updatedCart);
  }
}