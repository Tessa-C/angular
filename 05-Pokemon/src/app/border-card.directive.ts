import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]' //entre [] car on va faire référence à un attribut, pas une div
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#7FFF00';
  private defaultHeight: number = 180;

  //besoin d'un constructeur car il a besoin de savoir qu'on lui envoie les infos de sur quelle case on se trouve
  // ElementRef = vient d'AngularCore et va nous permettre d'avoir la réference de l'élément sur lequel nous pointons
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor)
   }

   //on déclare l'info qui viendra potentiellement du parent
  @Input("pkmBorderCard") declare borderColor: string;

  @HostListener("mouseenter") onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor)
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.setBorder(this.initialColor)
  }

  setHeight(height: number){
    //l'élément sur lequel nous sommes aura l'hauteur qu'on aura reçu en argument
    this.el.nativeElement.style.height = `${height}px`
    //le native élément va venir rechercher l'élément DOM car l'elementRef est en fait un encapsuleur, un wrapper, autour de l'élément DOM, le nativeElement va venir chercher l'élément en question.
  }
  
  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }
}
