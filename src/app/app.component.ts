import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo Manager';

  counter = 0;

  increment():void{
    this.counter++;
  };

  decrement():void{
    this.counter--;
  };

}
