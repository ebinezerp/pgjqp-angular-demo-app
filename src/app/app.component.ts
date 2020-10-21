import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string = 'geetha';
    age: number = 15;
    isActive: boolean = true;
    //button: string = 'disable';
    // clickHereButtonColor: string = 'orange';
    // fontSize: string = '20px';

    friendsNames: string[] = ['Ashok','Manoj', 'Varam', 'Geetha', 'Jeswanth', 'Surya'];

    f1(): string {
      return 'hello';
    }

    switch(): void{
      if (this.isActive) {
          this.isActive = false;
          //this.button = 'enable';
          // this.clickHereButtonColor = 'yellow';
          // this.fontSize = '10px';
      }else{
          this.isActive = true;
          //this.button = 'disable';
          // this.clickHereButtonColor = 'orange';
          // this.fontSize = '20px';
      }
    }

}
