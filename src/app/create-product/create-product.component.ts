import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  product: Product = new Product();
  products : Array<Product> = new Array <Product>();
  FormData = new FormData();

  constructor(public productService : ProductService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  
  saveProduct(){
    this.product.id=3;
    this.products.push(this.product); 
    this.router.navigate(["/gestioncatalogue"]);

    /* Envoi du produit et de l'image au serveur
    this.productService.addProduct(this.product).subscribe(
      ()=>{
        this.router.navigate(["/gestioncatalogue"]);
      },
      (error)=>{
        console.log("erreur de suppression");
      }
    )
    */
  }
  
  openDialog() {
    if(confirm("Etes-vous sur de vouloir quitter cette page ?")) {
      this.router.navigate(["/gestioncatalogue"]);  }
  }
  
  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.FormData.append(this.product.id.toString(), file);
        

        
    }
}


}
