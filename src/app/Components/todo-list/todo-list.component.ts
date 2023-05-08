import { Component } from '@angular/core';
import { UtilityService } from 'Services/Utility/utility.service';
import { Todo } from 'src/app/Model/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoArray: Todo[] = [];

  constructor(private utilityService: UtilityService){
    const todo1 = new Todo('Comprare il pane', false);
    const todo2 = new Todo('Pagare la bolletta', false);
    const todo3 = new Todo('Chiamare la nonna', false);

    this.todoArray = [todo1, todo2, todo3];
  };

  sortTodo(){
    this.todoArray = this.utilityService.sortArrayAlphabetically(this.todoArray);
  };

}
