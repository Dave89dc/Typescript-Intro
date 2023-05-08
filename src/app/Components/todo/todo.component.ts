import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() todo: Todo | undefined;

}
