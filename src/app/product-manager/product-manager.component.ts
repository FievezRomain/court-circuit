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
  //product: Product = {id : 0, libelle : "Tomates", description : "Grappe de 5 belles tomates rouges",categorie:"Fruit", provenance : "France", prix : 10, urlImage : "https://www.saveol.com/sites/default/files/2018-02/tomate-bio-saveol.png", quantity : 1}
  product: Product = new Product();
  id: number = 0;
  FormData = new FormData();
  message="";
  isValidForm=true;
  constructor(public productService : ProductService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    })
    this.getProduit(this.id);

    

  }
    /*Fonction pour récupérer le produit via l'API*/
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
  
  validForm():boolean{
    this.message="Champ(s) invalide(s): "+'\n';
    let resultat = true;
    if (this.product.categorie==""){  this.message+='\n' +"Catégorie est vide"; resultat= false ;} 
    if (this.product.description==""){ this.message+='\n' +"Description est vide"; resultat= false ;} 
    if (this.product.libelle=="") { this.message+='\n' + "Libellé est vide"; resultat= false ;}
    if ((this.product.prix==null) || (this.product.prix < 0) ) { this.message+='\n' + "Prix vide ou négatif"; resultat= false ;}
    if (this.product.provenance=="") { this.message+='\n' +"Provenance est vide"; resultat= false ;}
    if ((this.product.quantity==null) || (this.product.quantity < 0) ) { this.message+='\n' +"Quantité vide ou négative"; resultat= false ;}
    return resultat;
  }
  saveProduct(){
    this.isValidForm=this.validForm();
    if (this.isValidForm){
       this.productService.updateProduct(this.product.id, this.product).subscribe(
      ()=>{    
        console.log("OK");   
      },
      (error)=>{
        console.log("Erreur");   
      }
    )
    this.router.navigate(["/gestioncatalogue"]);

    /*
    this.productService.addImage(this.id, this.FormData).subscribe(
      ()=>{

      },
      (error)=>{
        console.log("erreur");
      }
      ) */
    }

  }
 
  openDialog() {
    if(confirm("Etes-vous sur de vouloir quitter cette page ?")) {
      this.router.navigate(["/gestioncatalogue"]);  }
  }
  
  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.FormData.append(this.id.toString(), file);
        
    }
    
}
  mySubmit(): Boolean{
    return false;
}
}

  


