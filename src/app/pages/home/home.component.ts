import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.models';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { CardComponent } from "../../components/card/card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, CardComponent, HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
[x: string]: any;
  productHome: ProductModel[] = [];
  constructor(private router: Router, private productService: ProductService) {
    this.productHome = this.productService.getProducts();
    console.log('Home Product:', this.productService.getProducts());
  }

  goToDetail(productId: string) {
    this.router.navigate(['/detail', productId]).then(() => {});
  }
}
