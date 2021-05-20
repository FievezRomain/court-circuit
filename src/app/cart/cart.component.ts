import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
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


  constructor(public productService : ProductService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    //this.products.push(this.product1, this.product2);

    this.getProduits();
  }
  getProduits(){
    this.productService.getProducts().subscribe(
      (produits : any)=>{
        this.products = produits.data;
        console.log(this.products);
      },
      (error)=>{
        console.log("erreur")
      }
    )
  }
}
