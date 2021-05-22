import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products : Array<Product> = new Array <Product>();


  constructor(public productService : ProductService) { }

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
  
  addToCard(idArticle: number):void{
    //Add product to user concerned
  }
}
