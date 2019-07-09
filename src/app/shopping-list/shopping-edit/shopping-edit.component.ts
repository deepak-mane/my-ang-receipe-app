// GotRid - import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { 
  Component, 
  OnInit ,
  OnDestroy
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  // @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  // GotRid - @Output() ingredientAdded = new EventEmitter<Ingredient>();
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
        }
      );
  }

  onAddItem(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredient(ingName, ingAmount)
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    // GotRid - this.ingredientAdded.emit(newIngredient);
    // Added Below now -
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
