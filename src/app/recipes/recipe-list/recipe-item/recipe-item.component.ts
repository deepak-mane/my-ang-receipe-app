// Got Rid: import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
  // GotRid : As par of Routing altogehter
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
 // GotRid of Event
 // @Output() recipeSelected = new EventEmitter<string>();


  // GotRid : As par of Routing altogehter
  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // GotRid : As par of Routing altogehter
  // onSelected() {
  //   // GotRid : this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
