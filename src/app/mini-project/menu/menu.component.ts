import { Component, OnInit } from '@angular/core';
import { CourseService } from '../core/services/course.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.listCourses();
  }

  listCourses(): void {
    this.courseService.listCourses().subscribe((course) => {
      console.log(course);
      this.courses = course;
    })
  }
}
// http://localhost:8000/curses?_embed=especifCurse