import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products : Array<Product> = new Array <Product>();
  searchText: String = "";


  constructor(public productService : ProductService, private cartService : CartService) { }

  ngOnInit(): void {
    this.getProduits();
  }
// Fonction pour récupérer les produits via l'API 
  getProduits(){
    this.productService.getProducts().subscribe(
      (produits : Array<Product>)=>{
        this.products = produits;
      },
      (error)=>{
        console.log("erreur")
      }
    )
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
}
