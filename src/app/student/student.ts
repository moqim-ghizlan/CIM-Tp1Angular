import { Component, Input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  @Input() firstName = 'fname';
  @Input() lastName = 'lname';
  @Input() stats = 'Absent';

  @Input() comment = '--';



  setFirstName(name: string) {
    this.firstName = name;
  }

  setLastName(name: string) {
    this.lastName = name;
  }


  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  setComment(comment: string) {
    this.comment = comment;
  }


}
