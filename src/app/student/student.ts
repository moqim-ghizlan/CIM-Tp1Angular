import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() statsChange = new EventEmitter<string>();
  lastUpdated: Date | null = null;
  absenceCount = 0;
  absentButtonDisabled = false;
  private absentTimer: ReturnType<typeof setTimeout> | null = null;



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

  setAbsent(): void {
    if (this.absentButtonDisabled) {
      return;
    }

    this.stats = 'Absent';
    this.absenceCount++;
    this.setLastUpdated();
    this.statsChange.emit(this.stats);
    this.absentButtonDisabled = true;

    this.absentTimer = setTimeout(() => {
      this.absentButtonDisabled = false;
      this.absentTimer = null;
    }, 3000);
  }

  setPresent(): void {
    if (this.absentTimer) {
      clearTimeout(this.absentTimer);
      this.absentTimer = null;
    }

    this.stats = 'Présent';
    this.absentButtonDisabled = false;
    this.setLastUpdated();
    this.statsChange.emit(this.stats);
  }

  setComment(comment: string) {
    this.comment = comment;
  }

  setLastUpdated() {
    this.lastUpdated = new Date();
  }

}
