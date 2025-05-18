
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Cart, Product } from '../models/menu';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartArr: Cart[] = [];

  constructor(private http: ServicesService) {}

  ngOnInit() {
    this.http.getCart().subscribe(resp => {
      console.log(resp);
      this.cartArr = resp;
      console.log(this.cartArr);
    });
  }

  deleteFromCart(id?: number) {
    this.http.deleteFromCart(id).subscribe(resp => {
      console.log(resp);
      this.http.getCart().subscribe(resp => {
        console.log(resp);
        this.cartArr = resp;
        console.log(this.cartArr);
      });
    });
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartArr.forEach(item => {
      totalPrice += item.product?.price! * (item.quantity || 1);
    });
    return totalPrice;
  }

  increaseAmount(item: Cart) {
    if (item.quantity) {
      item.quantity++;
    } else {
      item.quantity = 1;
    }
  }

  decreaseAmount(item: Cart) {
    if (item.quantity && item.quantity > 1) {
      item.quantity--;
    }
  }

  getTheProduct(id: number ) {
   alert(`You Bought The Food (${id}})`);
    this.http.deleteFromCart(id).subscribe(resp => {
      console.log(resp);
      this.http.getCart().subscribe(resp => {
        console.log(resp);
        this.cartArr = resp;
        console.log(this.cartArr);
      });
    });

  }
}

