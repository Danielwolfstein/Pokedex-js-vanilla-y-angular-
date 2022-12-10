import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pokemon;
  }
  get pokemon(){
    const id = this.activateRoute.snapshot.params['id'];
    return console.log(id);
  }

}
