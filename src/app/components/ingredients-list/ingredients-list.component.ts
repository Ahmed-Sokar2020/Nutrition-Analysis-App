import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {

  // Recieving data from Shell Component(Parent)
  @Input() ingredientDetails: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.ingredientDetails);
  }

}

