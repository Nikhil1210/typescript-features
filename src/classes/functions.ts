import {Library} from "../model/library";
import {Journal} from "../model/journal";
import {Category} from "../enum/Category";
import {IBook} from "../Interfaces/IBook";

interface IRunOptions {
    program : string;
    commandline: string[]| string| (() => string);
}

export class FunctionsDemo{
    private library:Library;
    private idGenerator: (input:string, id:number) => string;
    constructor(){
        this.library = new Library("Bank's library");
        // Inheritance
        const journal = new Journal();
        journal.title= "Launch of react fibre";
        journal.genre = "web development"
        const title = `journal: ${journal.title}`;

        //enum
        const bookonWeb = this.library. GetBooksByCategory(Category.Web);

        // function type
        this.idGenerator = this.library.GetId;
        const id: string= this.idGenerator("john", 15);
        this.idGenerator = (name:string, id:number) => name+ 2* id;
        const id2 : string = this.idGenerator("john", 15);

        // rest parameter
        const emp1 = this.library.BooksReadByEmployee("emp1","mongodb", "C#", "ES5", "Mathametics", "BigData");
        const emp2 =this.library.BooksReadByEmployee("emp2", "oracle", "React");

        // Function Overloading
        const booksByAuthor: IBook[] = this.library.GetBooks("john Doe") as IBook[];
        const booksByAvailibilty: IBook[] = this.library.GetBooks(true) as IBook[];

        // command line as a string
        let options: IRunOptions = { program:"test", commandline: "hello"};
        const cmd1 = options.commandline;

        // commandline as a string array
        options= {program: "p2", commandline: ["hello", "world"]};
        // const cmd2:string[] = options.commandline[0] as string[];
        // const cmd3: string = options.commandline[1] as string;

        // commandline a sa funcion paramater
        options = {program : "test1", commandline : () => "** Hello world **" };
        const cmd4 = options.commandline; 
    }

    private TestDefaultParams(input: string = "Default param"): string{
        return input;
    }
    private TestOptionalParams(name:string, id?:number): string {
        return name+id;
    }
}