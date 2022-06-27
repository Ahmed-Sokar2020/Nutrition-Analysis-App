import { Nutrients } from './../models/nutrient';
import { Ingredient } from '../models/ingredients';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  apiUrl = '/assets/Data/data.json';
  nutrientsDetails= new BehaviorSubject<Nutrients | null>(null);

  constructor(private http: HttpClient) { }

  // send the Ingredients data to the server
  sendIngredientsForm(form:Ingredient[]):Observable<Nutrients[]> {
    return new Observable((subscribe) => {
      this.getIngredientsDetails().subscribe((data) => {
        this.nutrientsDetails.next({});

        let nutsObj: Nutrients = {}
        const arr =  form.map(e => {
          const comingData = data.find(d => d.foodName === e.foodName);

          nutsObj = {
            calcium: nutsObj.calcium ||  comingData?.calcium!* e.quantity!,
            calories: nutsObj.calories || 0 +comingData?.calories!* e.quantity!,
            weight: nutsObj.weight || 0 +comingData?.weight!* e.quantity!,
            carbohydrate: nutsObj.carbohydrate || 0 +comingData?.carbohydrate!* e.quantity!,
            cholesterol: nutsObj.cholesterol || 0 +comingData?.cholesterol!* e.quantity!,
            fat: nutsObj.fat || 0 +comingData?.fat!* e.quantity!,
            fiber: nutsObj.fiber || 0 +comingData?.fiber!* e.quantity!,
            iron: nutsObj.iron || 0 +comingData?.iron!* e.quantity!,
            protein: nutsObj.protein || 0 +comingData?.protein!* e.quantity!,
            sodium: nutsObj.sodium || 0 +comingData?.sodium!* e.quantity!,
            sugars: nutsObj.sugars || 0 +comingData?.sugars!* e.quantity!,
            vitaminD: nutsObj.vitaminD || 0 +comingData?.vitaminD!* e.quantity!,
            potassium: nutsObj.potassium || 0 +comingData?.potassium!* e.quantity!,
          }

          const nutrients: Nutrients = {
            foodName: comingData?.foodName,
            unit: comingData?.unit,
            quantity: e.quantity,
            calcium: comingData?.calcium! * e.quantity!,
            calories: comingData?.calories! * e.quantity!,
            weight: comingData?.weight! * e.quantity!,
            carbohydrate: comingData?.carbohydrate! * e.quantity!,
            cholesterol: comingData?.cholesterol! * e.quantity!,
            fat: comingData?.fat! * e.quantity!,
            fiber: comingData?.fiber! * e.quantity!,
            iron: comingData?.iron! * e.quantity!,
            protein: comingData?.protein! * e.quantity!,
            sodium: comingData?.sodium! * e.quantity!,
            sugars: comingData?.sugars! * e.quantity!,
            vitaminD: comingData?.vitaminD! * e.quantity!,
            potassium: comingData?.potassium! * e.quantity!,
          }
          return nutrients;
        });

        this.nutrientsDetails.next(nutsObj);
        subscribe.next(arr);

      })
    });
  }

  // Method GET to get Nutrients Details data from the server
  getIngredientsDetails():Observable<Nutrients[]> {
    return this.http.get<Nutrients[]>(this.apiUrl);
  }

}
