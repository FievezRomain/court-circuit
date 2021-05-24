import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  product: Product = new Product();
  id: number = 0;
  quantity: number = 1;
  total: Number = 0;
  constructor(public productService : ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
   this.route.params.subscribe(params => {
    this.id = params["id"];
  })
  this.getProduit(this.id);
  }
  addToCart(produit: Product):void{
    this.cartService.addToCart(produit).subscribe(
      (cart : any)=>{
        console.log(cart);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  getProduit(id : number){
    this.productService.getProduct(id).subscribe(
      (produit : any)=>{
        this.product = produit;
        this.total = this.product.prix;
      },
      (error)=>{
        console.log("erreur")
      }
    )
  } 
  getTotal(){
    this.total = this.quantity * Number(this.product.prix);
  }
}
