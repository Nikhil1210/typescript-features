import {IBook} from "../Interfaces/IBook";

type status = "open" | "closed" | "inprogress";
type stringOrNumber = string | number;
type CustText = string | {text: string};
type ObjectStatics =  typeof Object;
type Callback<T> = (date: T)=> void;
type Pair<T> = [T,T];
type coordinates = Pair<number>;
type Tree<T> = T | {left: Tree<T>, right: Tree<T>};

interface IMap<T>{
    [K:string]: T;
}

interface IDictionary<T>{ [key: string]: T;}
export class TypesDemo{
    /**
     * makePoint
     */
    // public makePoint(): () => {
    //     x:number; y:number;
    // }
    // public persons: {[id:number]: IBook ;} = {};

    // constructor(){
    //     let list: IDictionary<IBook>;
    //     this.makePoint={ x:5,y:2};
    // }
}