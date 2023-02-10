import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongebob'
})
export class SpongebobPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(args);
    
    let result = "";
    //boucle for pour aller sur chaque caract de la chaîne de caract.
    for(let letterIndex = 0; letterIndex < value.length; letterIndex++){
      const letter = value.charAt(letterIndex);
      //un chiffre flottant entre 0 et 1. S'il est au-dessus de 0,5 il sera égal à 1. 
      const toUpperCase = Math.round(Math.random()) === 1 ? true : false;
      if(toUpperCase){
        result += letter.toUpperCase();
      }else {
        result += letter.toLocaleLowerCase()
      }
    }
    return result;
  }

}
