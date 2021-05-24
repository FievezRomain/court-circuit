import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  product: Product = new Product();
  products : Array<Product> = new Array <Product>();
  // FormData = new FormData();
  // image: any;
  message="";
  isValidForm=true;
  constructor(private authService: AuthService ,public productService : ProductService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    if(!this.authService.isModerateur){
      this.router.navigate(["/"]); 
    }
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
      this.productService.addProduct(this.product).subscribe(
      ()=>{
        this.router.navigate(["/managecatalogue"]);
      },
      (error)=>{
        console.log("erreur de suppression");
      }
    )
  
    }
  }
  openDialog() {
    if(confirm("Etes-vous sur de vouloir quitter cette page ?")) {
      this.router.navigate(["/managecatalogue"]);  }
  }
  
  // onFileChange(event:any) {
  //   const file:File = event.target.files[0];
  //   if (file) {
  //     this.FormData.append(this.product._id.toString(), file);
  //     this.product.image = this.FormData;
  //   }
  //  }
}
