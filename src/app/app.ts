import { Component, signal } from '@angular/core';
import { Student } from './student/student';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Student, FormsModule, NgFor],
})
export class App {
  isAuth: boolean = false;
  protected readonly nomSeance = signal(`Module Angular`);
  protected readonly SeanceHint = signal('CorrectionTP2');
  protected readonly resumeSeance = signal(
    `Gestion des données dynamiques (suite et fin) et structuration de documents.`,
  );
  seanceComment = '';

  students = [
    {
      firstName : "Dupont",
      lastName : "Jean",
      stats : "Absent",
      comment : "test"
    },
    {
      firstName : "Durand",
      lastName : "Sophie",
      stats : "Absent",
      comment : "test"
    },
    {
      firstName : "Martin",
      lastName : "Alice",
      stats : "Présent",
      comment : "Disponible"
    },
    {
      firstName : "Petit",
      lastName : "Claire",
      stats : "Présent",
      comment : "En ligne"
    },
  ]

  setAllPresent(): void {
    this.students.forEach(student => {
      student.stats = 'Présent';
    });
  }

  updateStudentStatus(student: { stats: string }, status: string): void {
    student.stats = status;
  }

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }


  rendTousPres(): void {
    console.log('Tous les étudiants sont présents.');
  }

}
