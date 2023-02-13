import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

//les routes se présentent comme des objets
const routes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent},
  //on met : car l'id est ici qqch qu'on va lui fournir
  {path: 'pokemons/:id', component: DetailPokemonComponent},
  {path: '', redirectTo: 'pokemons', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
