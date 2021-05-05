import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

 
  product: Product = {id : 0, libelle : "Tomates", description : "Grappe de 5 belles tomates rouges", provenance : "France", prix : 10, urlImage : "https://www.saveol.com/sites/default/files/2018-02/tomate-bio-saveol.png", quantity : 1}
 
  constructor(public productService : ProductService) { }

  ngOnInit(): void {
    
  }
  addToCard(idArticle: number):void{
    //Add product to user concerned
  }
}
