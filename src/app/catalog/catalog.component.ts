import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  

  //product1: Product = {id : 0, libelle : "Pomme", categorie : "Fruit", description : "Mon premier produit", provenance : "France", prix : 10, urlImage : "assets/img/product1.jpg", quantity:0 }
  //product2: Product = {id : 1, libelle: "Pomme2", categorie : "Fruit", description : "Mon second produit", provenance : "Italie", prix : 15, urlImage : "assets/img/product1.jpg", quantity:0 }
  products : Array<Product> = new Array <Product>();


  constructor(public productService : ProductService) { }

  ngOnInit(): void {
    //this.products.push(this.product1, this.product2);
    this.getProduits();
  }
// Fonction pour récupérer les produits via l'API 
  getProduits(){
    this.productService.getProducts().subscribe(
      (produits : any)=>{
        this.products = produits.data;
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
