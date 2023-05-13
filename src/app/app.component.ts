import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  title = 'AngularNgIntro';

  //child to parent
  parentMessage: string = 'Message coming from Parent component - app.component.ts'

  //parent to child
  //message: string;
  //@ViewChild(PostComponent) childComp;

  constructor(){
    //console.log(this.childComp);
  }

  ngAfterViewInit(){
    //console.log(this.childComp);

    //this.message=this.childComp.childMessage;
  }
}
