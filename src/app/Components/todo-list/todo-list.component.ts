import { Component } from '@angular/core';
import { DataService } from 'Services/Data/data.service';
import { UtilityService } from 'Services/Utility/utility.service';
import { ITodo } from 'src/app/Model/i-todo';
import { Todo } from 'src/app/Model/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoArray: ITodo[] = [];

  constructor(private utilityService: UtilityService, private dataS: DataService){
    // const todo1 = new Todo('Comprare il pane', false);
    // const todo2 = new Todo('Pagare la bolletta', false);
    // const todo3 = new Todo('Chiamare la nonna', false);

    // this.todoArray = [todo1, todo2, todo3];
    this.dataS.getData().then(data => {
      this.todoArray = data});
  };

  sortTodo(){
    this.todoArray = this.utilityService.sortArrayAlphabetically(this.todoArray);
  };

}
