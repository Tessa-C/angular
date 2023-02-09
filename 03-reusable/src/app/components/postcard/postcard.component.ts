import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent {
  //on ajoute un décorateur pour changer le comportement de l'élément qu'on décore. On transmet la valeur à notre composant, on le transforme en attribut dans app.component.html
  @Input('postTitle') title = 'Mon titre par défaut'
  //On peut utiliser un alias, qu'on passera en argument de notre décorateur Output comme pour Input.
  //A ce moment-là, c'est notre alias qu'on doit écrire entre () pour lier notre évènement à une fonction dans le composant parent
  @Output() clickTitle = new EventEmitter();

  clickedTitle(){
    this.clickTitle.emit(this.title);
  }
}
