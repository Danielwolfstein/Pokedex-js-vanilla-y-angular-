import { Component, OnInit } from '@angular/core';

import { PoketeamService } from 'src/app/service/poketeam.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public setAllPokemons: any;
  public getAllPokemons: any;
  constructor(
    private pokeApiService: PoketeamService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        console.log(this.getAllPokemons)
      }
      );
  }
  public getSearch(value: string){
    const filter = this.setAllPokemons.filter((res:any ) =>{
        return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }

}
