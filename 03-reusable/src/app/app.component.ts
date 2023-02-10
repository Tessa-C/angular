import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-reusable';
  //on crée un objet, le compteur de click par animal
  clickCountPerAnimal = {
    "otter": 42,
    "bat": 27
  }

  handleClickTitle(title: string){
    console.log(`${title} a été cliqué`);
    
  }
  updateClickCount(animal: keyof typeof this.clickCountPerAnimal){
    this.clickCountPerAnimal[animal] = this.clickCountPerAnimal[animal] + 1;
  }
}
