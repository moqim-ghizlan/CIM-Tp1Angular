import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
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

  getColorEtu(): string {
    return this.stats === 'Absent' ? 'red' : 'black';
  }

  setComment(comment: string) {
    this.comment = comment;
  }


}
