import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  ngOnInit() {
    of(2, 4, 6)
      .pipe(
        map((i) => {
          if (i === 6) {
            throw 'Error!';
          }
          return i;
        }),
        catchError((err) => of('Reached six'))
      )
      .subscribe({
        next: (x) => console.log(x),
        error: (err) => console.log(err),
      });
  }
}

bootstrapApplication(App);
