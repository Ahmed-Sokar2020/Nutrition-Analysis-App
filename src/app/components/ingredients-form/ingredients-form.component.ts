import { IngredientsService } from './../../services/ingredients.service';
import { Ingredient } from '../../models/ingredients';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss']
})
export class IngredientsFormComponent implements OnInit {
  isSubmitted = false;
  ingredient?: Ingredient[];

  @Output() formEvent= new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private ingredientsService: IngredientsService) {}

  ingredientsForm = this.formBuilder.group({
      ingredients:[[''],[Validators.required]],
  })

  ngOnInit(): void {}

  // Getter Method for the Form Controles
  get myForm() {
    return this.ingredientsForm.controls;
  }

  // When Submit the Ingredients Form
  onSubmit() {
    this.isSubmitted = true;
    if(this.ingredientsForm.invalid) return;

    const data: string[] = (<string>this.ingredientsForm.value.ingredients).trim().split(',');
    const ingredient: {
      quantity: number;
      unit: string;
      foodName:string;}[] = [] ;

    data.forEach(item => {
      const quantity = +item.trim().split(' ')[0];
      const unit =  item.trim().split(' ')[1];
      const foodName = item.trim().split(' ')[2];

      ingredient.push({
        quantity: +quantity,
        unit,
        foodName
      })
    })

    console.log(ingredient);

    this.sendFormData(ingredient);

  }

  // Subscribing to the Ingredients Service
  sendFormData(ingredients:Ingredient[]) {
    this.ingredientsService.sendIngredientsForm(ingredients)
    .subscribe(data => {
      this.formEvent.emit(data);
      console.log(data);
    })

  }


}
