import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog-manager',
  templateUrl: './catalog-manager.component.html',
  styleUrls: ['./catalog-manager.component.scss']
})
export class CatalogManagerComponent implements OnInit {

  //product1: Product = {id : 0, libelle : "Pomme", categorie : "Fruit", description : "Mon premier produit", provenance : "France", prix : 10, urlImage : "assets/img/product1.jpg", quantity:0 }
  //product2: Product = {id : 1, libelle: "Pomme2", categorie : "Fruit", description : "Mon second produit", provenance : "Italie", prix : 15, urlImage : "assets/img/product1.jpg", quantity:0 }
  products : Array<Product> = new Array <Product>();


  constructor(public productService : ProductService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    //this.products.push(this.product1, this.product2);;
    this.getProduits();
  }
/* Fonction pour récupérer les produits via l'API */
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
  
  /*deleteProduct(id : Number){
    var index ;
    for(var i in this.products) {
      if (this.products[i].id == id)
        index = i; 
    }
   this.products.splice(Number(index),1);
 } */
 
 //Fonction pour supprimer les produits via l'API 
  deleteProduct(id : Number){
    this.productService.deleteProduct(id).subscribe(
      ()=>{
        this.getProduits();
      },
      (error)=>{
        console.log("erreur de suppression")
      }
    )
  }
  createNewId(): Number{
    let id : Number = 0;
    for(let product of this.products){
      if(product.id >= id)
      id= +product.id+1  ;
     
    }
    return id;
  }
  
  openDialog(id : Number){
    if(confirm("Ce produit sera définitivement supprimé!")) {
      this.deleteProduct(id);
      this.router.navigate(["/gestioncatalogue"]); 
    }
  }
    
  

}
