import {Database} from "./../utils";
import {FoodItem} from "./../models";

export class FoodItemStorage {
    constructor(private readonly foodItemDB: Database<FoodItem>) {
    }

    list() {
        return this.foodItemDB.list();
    }

    insertUpdate(foodItem: FoodItem) {
        return this.foodItemDB.insertUpdate(foodItem);
    }

    remove(foodItemID: string) {
        return this.foodItemDB.remove(foodItemID);
    }
}
