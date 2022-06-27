import { Component, Input, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-ingredients-details',
  templateUrl: './ingredients-details.component.html',
  styleUrls: ['./ingredients-details.component.scss']
})

export class IngredientsDetailsComponent implements OnInit {
  ingredientDetails: any ;
// @Input() ingredientDetails: any;

  constructor(private ingredientsService: IngredientsService) { }

  // Recieving data by Subscribing to Behavior Subject(nutrientsDetails) in the Ingredients Service
  ngOnInit(): void {
    this.ingredientsService.nutrientsDetails.subscribe(data => {
      this.ingredientDetails = data;

    })
console.log(this.ingredientDetails);

  }



}
