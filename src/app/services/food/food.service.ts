import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

   getFoodById(id:number): Foods{
     return this.getAll().find(food => food.id == id)!;
   }

   getAllFoodByTag(tag:string):Foods[]{
   return tag =="All"?
    this.getAll():this.getAll().filter(food => food.tags?.
      includes(tag));
   }
    getAllTag():Tag[]{
      return [
        { name:'All', count: 10 },
        { name:'FastFood',count: 3},
        { name:'Biryani',count: 2},
        { name:'Fry',count: 1},
        { name:'Deserts',count: 2},
        { name:'Pizza',count: 2},


      ];
    }

  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'mutton-Biryani',
        cookTime: '60-90',
         price: 100,
        favorite: false,
        star: 4.5,
        origins: ['India'],
        imageUrl: '/assets/food-1.jpeg',
        tags: [ 'Biryani'],
      },
      {
        id: 2,
        name:'chicken-Biryani',
        cookTime: '60-90',
         price: 200,
        favorite: false,
        star: 4.5,
        origins: ['India'],
        imageUrl: '/assets/food-2.jpeg',
        tags: ['Biryani'],
      },
      
      {
        id: 3,
        name: 'Veg-rice',
        cookTime: '10-20',
         price: 80,
        favorite: false,
        star: 4.5,
        origins: ['India'],
        imageUrl: '/assets/food-3.jpeg',
        tags: ['FastFood', 'Biryani'],
      },
      {
        id: 4,
        name: 'white-rice',
        cookTime: '10-20',
         price: 100,
        favorite: false,
        star: 4.5,
        origins: ['India'],
        imageUrl: '/assets/food-4.jpeg',
        tags: ['FastFood', 'Biryani'],
      },
      {
        id: 5,
        name: 'Nodules',
        cookTime: '10-20',
         price: 100,
        favorite: false,
        star: 4.5,
        origins: ['china'],
        imageUrl: '/assets/food-5.jpeg',
        tags: ['FastFood'],
      },
      {
        id: 6,
        name: 'French-fry',
        cookTime: '10-20',
         price: 10,
        favorite: false,
        star: 4.5,
        origins: ['French'],
        imageUrl: '/assets/food-6.jpeg',
        tags: ['Fast Food', 'Fry'],
      },
      {
        id: 7,
        name: 'pesta',
        cookTime: '10-20',
         price: 210,
        favorite: false,
        star: 4.5,
        origins: ['USA'],
        imageUrl: '/assets/food-7.jpeg',
        tags: [ 'Pizza'],
      },
      {
        id: 8,
        name: 'chicken-pesta',
        cookTime: '30-50',
         price: 10,
        favorite: false,
        star: 4.5,
        origins: ['USA'],
        imageUrl: '/assets/food-8.jpeg',
        tags: ['Fast Food', 'Pizza'],
      },
      {
        id: 9,
        name: 'Ice-cream',
        cookTime: '30-50',
         price: 80,
        favorite: false,
        star: 4.5,
        origins: ['UK'],
        imageUrl: '/assets/food-9.jpeg',
        tags: [ 'Deserts'],
      },
      {
        id: 10,
        name: 'gulamjam',
        cookTime: '30-50',
         price: 50,
        favorite: false,
        star: 4.5,
        origins: ['Indai'],
        imageUrl: '/assets/food-10.jpeg',
        tags: ['Deserts'],
      },

      
      
    
    ]
  }
}
