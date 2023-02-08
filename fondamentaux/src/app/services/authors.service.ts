import { Injectable } from '@angular/core';

export interface Author{
  authorName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAllAuthors(): Author[]{
    return[
      {
        authorName: 'Dan Brown'
      },
      {
        authorName: 'Douglas Preston'
      },
      {
        authorName: 'Lincoln Child'
      }
    ]
  }
}
