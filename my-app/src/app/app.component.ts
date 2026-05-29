import { Component } from '@angular/core';
import { ProductServiceService } from './productService/product.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ProductService:ProductServiceService){}

  title = 'my-app';
  products:{}[]=[];

  user: string = 'shubham';

  name: string = 'gopal';

  message:string='this message comes from parent'

  imageUrl: string =
    'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png';

  isValid: boolean = true;

  handleClick() {
    console.log('triggered');
  }

  toggleDisable() {
    this.isValid = !this.isValid;
  }

  handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.user = inputElement.value;
  }

  // ngOnInit(){
  //   this.products = this.ProductService.getProduct();
  //   console.log(this.products);
  // }

  isVisible:boolean = false; 

  toggleChild() {
    this.isVisible = !this.isVisible;
  }

  
  fruits = ['apple','ananas','mango','banana','paynapal'];
  newFruits=this.fruits;
  // handleClickFruit(){
    //   this.newFruits = this.fruits.filter((fruit:string)=>fruit.includes(this.inputFruit));
    // }
    
    inputFruit="";
    handleInputFruit(event:Event){
    const inputElement = event.target as HTMLInputElement;
    this.inputFruit = inputElement.value;
    this.newFruits = this.fruits.filter((fruit:string)=>fruit.includes(this.inputFruit.trim()));
  }
}