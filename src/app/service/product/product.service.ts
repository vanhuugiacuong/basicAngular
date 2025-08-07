import { Injectable } from '@angular/core';
import { ProductModel } from '../../models/product.models';

@Injectable({
  providedIn: 'root',
})


export class ProductService {
  getProducts(): ProductModel[] {
    return this.products;
  }
  products: ProductModel[] = [
    {
      id: '1',
      name: 'Product 1',
      description: 'This is the first product description.',
      price: 100,
      imageUrl: 'assets/jacket1.avif',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'This is the second product description.',
      price: 200,
      imageUrl: 'assets/jacket2.avif',
      quantity: 1,
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'This is the third product description.',
      price: 300,
      imageUrl: 'assets/jacket3.avif',
      quantity: 1,
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'This is the fourth product description.',
      price: 400,
      imageUrl: 'assets/jacket2.avif',
      quantity: 1,
    },
    {
      id: '5',
      name: 'Product 5',
      description: 'This is the fifth product description.',
      price: 500,
      imageUrl: 'assets/jacket3.avif',
      quantity: 1,
    },
    {
      id: '6',
      name: 'Product 6',
      description: 'This is the sixth product description.',
      price: 600,
      imageUrl: 'assets/jacket1.avif',
      quantity: 1,
    },
    {
      id: '7',
      name: 'Product 7',
      description: 'This is the seventh product description.',
      price: 700,
      imageUrl: 'assets/jacket2.avif',
      quantity: 1,
    },
    {
      id: '8',
      name: 'Product 8',
      description: 'This is the eighth product description.',
      price: 800,
      imageUrl: 'assets/jacket3.avif',
      quantity: 1,
    },
  ];

  cart: ProductModel[] = [];

  getCart(): ProductModel[] {
    return this.cart;
  }

  addProductToCart(product: ProductModel) {
    const existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity! += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getDetailProduct(productId: string): ProductModel {
    const product = this.products.find((p) => p.id === productId);
    if (!product) {
      console.log('Product not found');
      throw new Error('Product not found');
    }
    return product;
  }
}
