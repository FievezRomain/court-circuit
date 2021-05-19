import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  product: Product = {id : 0, libelle : "Tomates", description : "Grappe de 5 belles tomates rouges",categorie:"Fruit", provenance : "France", prix : 10, urlImage : "https://www.saveol.com/sites/default/files/2018-02/tomate-bio-saveol.png", quantity : 1}
  /*product: Product = new Product();
  id: number = 0;*/
  FormData = new FormData();
  constructor(public productService : ProductService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    /*
    this.route.params.subscribe(params => {
      this.id = params["id"];
    })
    this.getProduit(this.id);

    */

  }
    /*Fonction pour récupérer le produit via l'API
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
  */
 /*
  saveProduct(){
       this.productService.updateProduct(this.product.id, this.product).subscribe(
      ()=>{       
        this.router.navigate(["/gestioncatalogue"]);
      },
      (error)=>{
        console.log("Erreur");   
      }
    )
    this.productService.addImage(this.id, this.FormData).subscribe(
      ()=>{

      },
      (error)=>{
        console.log("erreur");
      }
      )
    

  }
  */
  saveProduct(){
    this.router.navigate(["/gestioncatalogue"]);
  }
  openDialog() {
    if(confirm("Etes-vous sur de vouloir quitter cette page ?")) {
      this.router.navigate(["/gestioncatalogue"]);  }
  }
  
  onFileSelected(event:any) {
/*
    const file:File = event.target.files[0];

    if (file) {

        this.FormData.append(this.id.toString(), file);
        
        
    }
    */
}

}

  


