import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false})
  ingredientNameInput: ElementRef;
  @ViewChild('amountInput', {static: false})
  ingredientAmountInput: ElementRef;
  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const name = this.ingredientNameInput.nativeElement.value;
    const amount = this.ingredientAmountInput.nativeElement.value;
    const ingredient = new Ingredient( name,
      Number(amount));
    this.ingredientAdded.emit( ingredient );
  }

}
