export interface Inventory<T>{
    getNewestItem:() => T;
    addItem: (newItem:T) => void;
    getAllItems: ()=> T[];
}