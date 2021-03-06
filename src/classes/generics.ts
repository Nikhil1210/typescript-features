import {Library} from "../model/library";
import {Catalog} from "../model/Catalog";
import {IBook} from "../Interfaces/IBook";
import {Category} from "../enum/Category";

export class Generics {
    constructor() {

    // generic functions
   // const genString: string =  this.LogAndReturn<string>("logging string"); Restricted by generics
    const genNumber: number = this.LogAndReturn<number>(22);
    const newLibrary : Library = new Library("Socgen library");
    const genObj : Library = this.LogAndReturn<Library>(newLibrary);

    // Strict type check feature in typescript 2.4 for generics
    // const f: <T>(x: T) => T = (y) => y() + y.foo.bar;   // Here, implicitly y is {}
    const f: <T>(x: T) => T = (y: any) => y() + y.foo.bar;

    const math= new Maths<number>();
    math.add = (x,y) => x+y;
    const testMathAdd = math.add;
    const sum = testMathAdd(5,2);

    // generic class demo with string type
    const ctlgBooks = new Catalog<IBook>();
    ctlgBooks.addItem({id: 2, title:"angular 4", author: "Google", available: true, category: Category.Web});
    ctlgBooks.addItem({id: 4, title:"Typescript 2.4", author: "Microsoft", available: true, category: Category.Web});
    ctlgBooks.addItem({id: 9, title:"Hadoop", author: "open source", available: false, category: Category.Database});
    
    const allBooks: IBook[] = ctlgBooks.getAllItems();
    const newestBook: IBook= ctlgBooks.getNewestItem();
}

    /**
     * LogAndReturn generic input
     */
    public LogAndReturn<T extends Library | number>(input: T): T {
        console.log(input);
        return input;
    }
}

class Maths<T>{
    /**
     * add
     */
    public add:(x:T, y:T) => T;
}