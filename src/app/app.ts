import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly nomSeance = signal(`Module Champ d'applications`);
  protected readonly SeanceHint = signal('Séance TP 1');
  protected readonly resumeSeance = signal(
    `Prise en main d'Angular, premier application.`,
  );
}
