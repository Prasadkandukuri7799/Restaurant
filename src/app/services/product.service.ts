// import { JsonPipe } from '@angular/common';
// import { Injectable } from '@angular/core';
// import { Product } from './model';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   private dataSource  = new BehaviorSubject<any>('');
//   data = this.dataSource.asObservable();
//   constructor() { }

//   updateProduct(data:any){
//     this.dataSource.next(data);
//   }
  
//   viewProducts(){
//     return fetch('http://localhost:3000/products').then(res=>res.json());
//   }

//   saveProduct(data:Product){
//     let options = {
//       method: 'POST',
//       headers: {'content-type':'application/json'},
//       body: JSON.stringify(data)
//     }
//     return fetch('http://localhost:3000/products',options).then(res => res.json());
//   }
//   updateData(data:Product){
//     let options = {
//       method: 'PUT',
//       headers: {'content-type':'application/json'},
//       body: JSON.stringify(data)
//     }
//     return fetch('http://localhost:3000/products/'+data.id,options).then(res => res.json());
//   }
// }
