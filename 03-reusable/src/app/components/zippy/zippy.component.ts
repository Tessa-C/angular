import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  //Mon zippy component va gagner un attribut title qui permettra de définir notre propriété
  @Input() declare title:string; 
  //on a dû mettre le décorateur @Input devant, pour qu'il soit reconnu dans app.component.html
  @Input() isContentVisible = false;
  @Input() declare manager:string;
  //on déclare un compteur de click. Number et pas 0 car on veut que ce soit un compteur général.
  @Input() declare clickCount: number;

  @Output() titleClicked = new EventEmitter()

  toggleContentVisibility(){
    this.titleClicked.emit();
    this.isContentVisible = !this.isContentVisible;
  }
}
