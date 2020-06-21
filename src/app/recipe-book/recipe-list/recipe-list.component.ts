import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    @Output()
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Scrambled Eggs',
            'Great breakfast',
            'https://toriavey.com/images/2014/06/scrambled_eggs_001.jpg'),
        new Recipe('Cereals and Milk',
            'Easy breakfast',
            'https://www.keranews.org/sites/kera/files/styles/medium/public/201811/cereal___milk.jpg')
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }

}
