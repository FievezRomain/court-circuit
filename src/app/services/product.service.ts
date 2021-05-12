import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getProducts():Observable<any>{
    return this.http.get("http://localhost:3000/products");
  }
  getProduct(id : number):Observable<any>{
    return this.http.get("http://localhost:3000/products/"+id);
  }
  addProduct(produit: Product):Observable<any>{
    return this.http.post("http://localhost:3000/products", produit);
  }

  updateProduct(id: number, produit : Product): Observable<any>{
    return this.http.put("http://localhost:3000/products/"+ id, produit);
  } //verifier _id

  deleteProduct(id : number): Observable<any>{
    return this.http.delete("http://localhost:3000/products/"+ id);
  }



}
