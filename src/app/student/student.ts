import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  firstName = 'fname';
  lastName = 'lname';

  setFirstName(name: string) {
    this.firstName = name;
  }

  setLastName(name: string) {
    this.lastName = name;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}
