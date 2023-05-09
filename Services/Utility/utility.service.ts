import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/Model/i-todo';
import { Todo } from 'src/app/Model/todo';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  sortArrayAlphabetically(array: ITodo[]): ITodo[]{
    const newArray = [...array];
    newArray.sort((a, b) => a.title.localeCompare(b.title));
    return newArray;
  };

}
