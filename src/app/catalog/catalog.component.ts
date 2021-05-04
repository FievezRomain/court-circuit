import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  

  product1: any = {idArticle : 0, titre : "Pomme", categorie : "Fruit", description : "Mon premier produit", provenance : "France", prix : 10, image : "assets/img/product1.jpg"}
  product2: any = {idArticle : 1, titre: "Pomme2", categorie : "Fruit", description : "Mon second produit", provenance : "Italie", prix : 15, image : "assets/img/product1.jpg"}
  products : Array<any> = new Array <any>();


  constructor(public productService : ProductService) { }

  ngOnInit(): void {
    this.products.push(this.product1, this.product2);
  }
  addToCard(idArticle: number):void{
    //Add product to user concerned
  }
}
