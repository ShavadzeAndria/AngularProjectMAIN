import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  getMenu() :Observable <any>{
    return this.http.get<any>(  'https://restaurant.stepprojects.ge/api/Products/GetAll');
}
  getCart() :Observable <any>{
    return this.http.get<any>('https://restaurant.stepprojects.ge/api/Baskets/GetAll');
  }
  deleteFromCart(id?:number) :Observable <any>{
    return this.http.delete<any>(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`);
  }
  addToCart(product: any): Observable<any> {
    return this.http.post<any>('https://restaurant.stepprojects.ge/api/Baskets/AddToBasket', product);
  } 
  updateCart(id: number, product: any): Observable<any> {
    return this.http.put<any>(`https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket`, product);
  }
  getfilteredMenu(categoryId: number): Observable<any> {
    return this.http.get<any>(`  'https://restaurant.stepprojects.ge/api/Products/GetFiltered'/${categoryId}`);
  }
} 