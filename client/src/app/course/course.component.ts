import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course, courses } from '../courses';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course = courses;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  addToCart(course: Course) {
    this.cartService.addToCart(course);
    window.alert('Your Course has been added to the cart!');
    console.log(course);

  }
}