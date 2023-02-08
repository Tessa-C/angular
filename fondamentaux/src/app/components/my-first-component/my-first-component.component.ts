import { Component } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';

@Component({
  //fonctionne comme un sélecteur CSS
  selector: '.firstComponent',
  //chemin vers le fichier html lié à ma classe
  templateUrl: './my-first-component.component.html',
  //On pourrait écrire l'HTML directement dans le composant si on remplace templateUrl par template et qu'on met des <div> et du texte mais c'est NON !!!
  //le ficher css est dans un tableau, car nous offre la possibilité d'en avoir plusieurs
  styleUrls: ['./my-first-component.component.css']
  //en soi, on pourrait créer un styles et mettre le style css ici mais ce n'est pas du tout conseillé!
})
export class MyFirstComponentComponent {
  //on va utiliser cette propriété et l'afficher dans notre html (se comporte comme une variable)
  criDeVictoire = 'Hourra !'
  declare movies: Movie[];

  constructor(private moviesService: MoviesService){
    this.movies = this.moviesService.getAllMovies();
  }


  //retourne banane en chaîne de caract.
  getBanane(){
    return 'banane';
  }
}
