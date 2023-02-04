import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Bienvenido a Angular';
  curso: string = 'Curso Spring 6 con Angular 15';
  alumno: string = 'Hugo Colín Miranda';
}
