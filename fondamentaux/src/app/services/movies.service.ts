import { Injectable } from '@angular/core';

export interface Movie{
  title: string;
  description: string;
}

//Le décorateur injectable rend l'instance de ma classe connu par Angular. Cette instance pourra être distribuée à la demande dans nos composants.
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getAllMovies(): Movie[] {
    return [
      {
        title: "The Rock",
        description: "Alcatraz is under attack. The end is near. Sean Connery saves the day."
      },
      {
        title: "Harry Potter",
        description: "A boy discovers he is a wizard and goes to live in a magical castle. Oh, and a dark mage wants to kill him every damn year."
      },
      {
        title: "Lord of the Rings",
        description: "In a hole in the ground there lives a hobbit. Who should have been more careful when he stole the fucking ring of Sauron and doomed Middle Earth."
      }
    ]
  }
}
