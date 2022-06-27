import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { IngredientsFormComponent } from './components/ingredients-form/ingredients-form.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientsDetailsComponent } from './components/ingredients-details/ingredients-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    IngredientsFormComponent,
    IngredientsListComponent,
    IngredientsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
