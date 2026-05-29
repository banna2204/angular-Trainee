import {  Component, Input, SimpleChanges } from '@angular/core';
import { ProductServiceService } from 'src/app/productService/product.service.service';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent {
  constructor(private productService:ProductServiceService){}

  @Input() user:string='';

  products:{}[]=[];

  ngOnInit(){
    this.products = this.productService.getProduct();
    console.log(this.products);
  }
  

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Input data changed', changes);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Cleaning up resources');
  }


}
