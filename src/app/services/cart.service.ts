import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCart():Observable<any>{
    return this.http.get("http://localhost:3000/carts", {withCredentials: true});
  }
  addToCart(produit: Product):Observable<any>{
    return this.http.post("http://localhost:3000/carts", produit, {withCredentials: true});
  }
  removeLineFromCart(id: Number):Observable<any>{
    return this.http.delete("http://localhost:3000/carts/" + id, {withCredentials: true});
  }
}
