import { Component, signal } from '@angular/core';
import { Student } from './student/student';
import { FormsModule } from '@angular/forms';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Student, FormsModule, NgFor, NgIf],
})
export class App {
  isAuth: boolean = false;
  protected readonly nomSeance = signal(`Module Angular`);
  protected readonly SeanceHint = signal('CorrectionTP2');
  protected readonly resumeSeance = signal(
    `Gestion des données dynamiques (suite et fin) et structuration de documents.`,
  );
  seanceComment = '';

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }


  rendTousPres(): void {
    console.log('Tous les étudiants sont présents.');
  }

}
