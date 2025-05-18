import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import {  Product } from '../models/menu';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']

})

export class MenuComponent {
  menuArr: Product[] = []; 
  cart: { productId: number; price: number | undefined; quantity: number }[] = [];

  constructor(private http: ServicesService) {}

  ngOnInit() {

    this.http.getMenu().subscribe(resp => {
      console.log(resp);
      this.menuArr = resp;
    });
  }
  addToCart(product: Product) {
    const cartItem = {
      productId: product.id, 
      price: product.price,
      quantity: 1 
    };

    const alreadyInCart = this.cart.some((item) => item.productId === product.id);
    if (alreadyInCart) {
      alert(`${product.name} უკვე არის კალათაში.`);
      return;
    } else {
      this.cart.push(cartItem);
    }

    this.http.addToCart(cartItem).subscribe({
      next: (response) => {
        console.log('Product added to cart:', response);
        alert(`${product.name} დაემატა კალათაში წარმატებით!`);
      },
      error: (error) => {
        console.error('Error adding product to cart:', error);
        alert('პროდუქტის დამატება ვერ მოხერხდა.');
      }
    });
  }
}
