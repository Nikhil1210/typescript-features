import {IBook} from "../Interfaces/IBook";
interface Person {
    name: string;
    age: number;
    location: string;
}
type status = "open" | "closed" | "inprogress";
type stringOrNumber = string | number;
type CustText = string | {text: string};
type ObjectStatics =  typeof Object;
type Callback<T> = (date: T) => void;
type Pair<T> = [T, T];
type coordinates = Pair<number>;
type Tree<T> = T | {left: Tree<T>, right: Tree<T>};

interface IMap<T> {
    [K: string]: T;
}

export class TypesDemo {
    constructor() {
        type Color = "red" | "blue" | "green";
        type ColorToRgb = { [C in Color]?: string };
        const rgbMap: ColorToRgb = {
        red: "#ff0000",
        };
     //   const objType: object = "asas"; // object type could not be any primitive type
        const varObj: object = new TypesDemo(); // its allowed object types and undefined
        const varObj2: object = undefined;
        type P1 = Person["name"];  // string
        type P2 = Person["name" | "age"];  // string | number
        type P3 = string["charAt"];  // (pos: number) => string
        type P4 = string[]["push"];  // (...items: string[]) => number
        type P5 = string[][0];  // string
    }
}
