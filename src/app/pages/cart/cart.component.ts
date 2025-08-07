import { Component } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { ProductModel } from '../../models/product.models';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-cart',
  imports: [MatCardModule, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: ProductModel[] = [];
  constructor(public cartservice: ProductService) {
    this.cartItems = this.cartservice.getCart();
    console.log('Cart Items:', this.cartItems);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
  }
}
