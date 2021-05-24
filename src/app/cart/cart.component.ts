import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  //product1: Product = {id : 0, libelle : "Pomme", description : "Une belle pomme",categorie:"Fruit", provenance : "France", prix : 5, urlImage : "https://www.le-panier-de-flo.fr/3954-large_default/pommes-pink-lady-800g.jpg", quantity : 1}
  //product2: Product = {id : 1, libelle : "Poire", description : "Une belle poire",categorie:"Fruit", provenance : "Allemagne", prix : 5, urlImage : "http://labelbleu.ch/system/files/7205/medium/poire-williams.png?1474442636", quantity  :2}
 
  products : Array<Product> = new Array <Product>();
  cart: any = 0;


  constructor(public productService : ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    //this.products.push(this.product1, this.product2);
    this.getCart();
  }

  getCart(){
    this.cartService.getCart().subscribe(
      (cart:any)=>{
        this.cart = cart;
        console.log(cart);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  removeLineFromCart(id: Number):void{
    console.log(id);
    this.cartService.removeLineFromCart(id).subscribe(
      (cart : any)=>{
        this.cart = cart;
        console.log(cart);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
