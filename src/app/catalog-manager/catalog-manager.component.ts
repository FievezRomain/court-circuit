import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog-manager',
  templateUrl: './catalog-manager.component.html',
  styleUrls: ['./catalog-manager.component.scss']
})
export class CatalogManagerComponent implements OnInit {
  products : Array<Product> = new Array <Product>();


  constructor(private authService: AuthService, public productService : ProductService, private router:Router) { }

  ngOnInit(): void {
    if(!this.authService.isModerateur){
      this.router.navigate(["/"]); 
    }
    //this.products.push(this.product1, this.product2);;
    this.getProduits();
  }
/* Fonction pour récupérer les produits via l'API */
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
  // createNewId(): Number{
  //   let id : Number = 0;
  //   for(let product of this.products){
  //     if(product.id >= id)
  //     id= +product.id+1  ;
     
  //   }
  //   return id;
  // }
  
  openDialog(id : Number){
    if(confirm("Ce produit sera définitivement supprimé!")) {
      this.deleteProduct(id);
      this.router.navigate(["/gestioncatalogue"]); 
    }
  }
    
  

}
