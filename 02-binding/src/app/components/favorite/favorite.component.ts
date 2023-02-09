import { Component } from '@angular/core';

enum Star{
  EMPTY = '☆',
  FILLED = '★'
}

// ATTENTION ne rien mettre entre @Component et export class
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  star = Star.EMPTY;

  isEmpty = false;

  toggleIsFavorite(){
    this.star = this.star === Star.EMPTY ? Star.FILLED: Star.EMPTY

  }
}
