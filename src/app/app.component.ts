import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularNgIntro';

  parentMessage: string = 'Message coming from Parent component - app.component.ts'



}
