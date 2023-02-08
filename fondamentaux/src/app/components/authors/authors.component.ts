import { Component } from '@angular/core';
import { AuthorsService, Author } from '../../services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors: Author[];

  //private car n'aura ici pas besoin de sortir de la classe
  constructor(private authorsService: AuthorsService){
    this.authors = this.authorsService.getAllAuthors();
  }
}
