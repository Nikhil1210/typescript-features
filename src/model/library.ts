import {IBook} from "../Interfaces/IBook";
import {Category} from "../enum/Category";

export class Library {
    private name : string;
    private books: IBook[] = new Array();
    constructor(name:string){
        this.name = name;
        this.books.push({id:1, title:"python", author: "john Doe", available: false,
         category: Category.Algorithms}); 
        this.books.push({id:2, title:"machine learning", author: "author 2", available: true,
         category: Category.Algorithms});
        this.books.push({id:3, title:"react", author: "Cory house", available: false,
         category: Category.Web});
        this.books.push({id:4, title:"oracle", author: "john Doe", available: true,
         category: Category.Database});
        this.books.push({id:5, title:"angular", author: "Joe Eames", available: true,
         category: Category.Web});
    }

    public GetBooks(input: string | boolean){
        if(typeof input === "string"){
            const books: IBook[] = this.books.filter((book: IBook) => book.author === input);
            return books;
        }else if(typeof input === "boolean"){
            const books: IBook[] = this.books.filter((book:IBook) => book.available === input);
            return books;
        }
    }
    public GetBooksByCategory(category: Category): IBook[]{
        const books: IBook[] = this.books.filter((book: IBook) => book.category === category);
        return books;
    }

    public GetId(name: string, id: number): string{
        return name+ id;
    }
    public BooksReadByEmployee(name:string, ...books:string[]): string{
        return name+books;
    }
}