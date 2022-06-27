import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  analizationData = null;
  recievedDetailsArray: any = []  ;

  constructor() { }

  ngOnInit(): void {}

  // Method to recieve the event data from child(IngredientsForm Component)
  showDetails(data:any){
    this.recievedDetailsArray = [];
    this.recievedDetailsArray = data;
    console.log(data);
  }


}
