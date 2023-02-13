import { Component, OnInit } from '@angular/core';
// import {POKEMONS} from './mock-pokemon'; // liste des pokémons
// import {Pokemon} from './pokemon'; // utilisé comme typage, il vérifie, nous sert d'interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) //OnInit pour implémenter un interface. On pourra lancer la méthode NgOnInit.
export class AppComponent implements OnInit {
  title = '05-Pokemon';
  // pokemonList: Pokemon[] = POKEMONS;
  // //au cas où ce qui a été mis l'input n'est pas une string
  // pokemonSelected: Pokemon | undefined;
  // messageVisible: boolean = false;

  //évite que nous se lance d'un coup dès qu'on lance le serveur
  ngOnInit(){
    // console.table(this.pokemonList);
  }
  // selectPokemon(event: MouseEvent){
  //   //c'est de la merde
  //   // const pokemon = (event.target as HTMLInputElement).innerText;
  //   // console.log(`Vous avez cliquez sur le Pokemon ${pokemon}`);
    
  // }
  // selectPokemon(pokemon: string){
  //   console.log(pokemon);
    
  // }
  // selectPokemonById(pokemonId: string){
    // const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === +pokemonId)
    // this.pokemonSelected = pokemon;
    // this.messageVisible = true;
    // if(pokemonId === ""){
    //   this.messageVisible = false;
    // }else{
    //   this.messageVisible = true;
    // }
  // }
}
