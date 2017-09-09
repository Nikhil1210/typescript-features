import {Inventory} from "../Interfaces/Inventory";

export class Catalog < T > implements Inventory < T > {
private catalogItem = new Array<T>();

public getNewestItem() : T {
return this.catalogItem[this.catalogItem.length -1];
}

public addItem (newItem : T) {
    this.catalogItem.push(newItem);
}
public getAllItems() : T[]{
    return this.catalogItem;
}
}