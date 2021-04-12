import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userFirstName : String = "";
  userLastName : String = "";
  userCart : Map<Product, Number> = new Map<Product, Number>();

  constructor() { }

  addProductToCart(article:Product){
    if(!this.userCart.has(article)){
      var nbArticles = this.userCart.get(article);
      nbArticles = Number(nbArticles) + 1;
      this.userCart.set(article, Number(nbArticles))
      this.notifyAPI("PUT", article.id, 1);
    } else{
      this.userCart.set(article, 1);
      this.notifyAPI("POST", article.id, 1);
    }
  }
  deleteProductToCart(article:Product){
    var nbArticles = this.userCart.get(article);
    nbArticles = Number(nbArticles);
    if(nbArticles > 1){
      nbArticles = Number(nbArticles) - 1;
      this.userCart.set(article, Number(nbArticles));
      this.notifyAPI("PUT", article.id, 1);
    } else{
      this.userCart.delete(article);
      this.notifyAPI("DELETE", article.id, 1);
    }
  }

  notifyAPI(type:String, idArticle:Number, nb:Number){

  }
}
