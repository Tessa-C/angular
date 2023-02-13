import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Pokemon} from '../pokemon';
import {POKEMONS} from '../mock-pokemon';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router){}
  declare pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;
  ngOnInit(){
    this.pokemonList = POKEMONS;
    //snapshot permet d'accéder à l'url à l'instant T, paramMap permet d'itérer sur chacun des paramètres de mon url
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonList.find(monstre => monstre.id == +pokemonId)
    }
  }
}
