import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  text: string = 'List of Posts'

  //child to parent
  postParentMessage: string = 'Message coming from the Post parent - post.component.ts'
  @Input() fromParent = '';

  //parent to child
  childMessage: string = 'From child component - post.component.ts'

}
