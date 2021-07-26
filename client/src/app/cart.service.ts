import { courses, Course } from './courses';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Course[] = [];
  constructor() { }

  addToCart(course: Course) {
    this.items.push(course);
    console.log(course);
    console.log(this.items);
    
    
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
