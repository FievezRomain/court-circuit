import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

 
  //product: Product = {id : 0, libelle : "Tomates", description : "Grappe de 5 belles tomates rouges",categorie:"Fruit", provenance : "France", prix : 10, urlImage : "https://www.saveol.com/sites/default/files/2018-02/tomate-bio-saveol.png", quantity : 1}
  product: Product = new Product();
  id: number = 0;
  constructor(public productService : ProductService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

   this.route.params.subscribe(params => {
    this.id = params["id"];
  })
  this.getProduit(this.id);
  }
  addToCard(idArticle: number):void{
    //Add product to user concerned
  }
  getProduit(id : number){
    this.productService.getProduct(id).subscribe(
      (produit : any)=>{
        this.product = produit.data;
      },
      (error)=>{
        console.log("erreur")
      }
    )
  } 
}
