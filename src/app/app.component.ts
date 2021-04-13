import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'WEB ';
  counter=0;
  onPlus(): void {
    this.counter +=5;
  }
  onsubtract (): void{
    this.counter -=5;
  }
}
