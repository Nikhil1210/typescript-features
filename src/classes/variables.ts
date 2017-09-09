import {IBook} from "../Interfaces/IBook";
import {Category} from "../enum/Category";
import {IEmployee} from "../Interfaces/IEmployee";

export class VarDemo {
    private var1 : string;
    private var2: string;
    private book: IBook = {id:3, author:"John Doe", title: "Web components", 
        available:true, category: Category.Web};
    private emp: IEmployee = {empid: 443, name:"Mark arther", location:"Toronto"};

    constructor(){
        this.TestScope();
        this.TestClosure();
        this.TestThis();

        // Tuples
        const tuple: [string,number, boolean]= ["abc", 98, true];
        console.log(`first element: ${tuple[0]}`);
        // tuple[2] = "abcd";   // wrong datatype is not allowed
        tuple[3] = "new element";
        console.log(`Fourth element: ${tuple[3]}`);

        // Type casting
        const someNum :number = 44.65;
        const someString:string = someNum.toString();
        const otherString: string = someNum + "";

        const str: string = "2324.34";
        const strToNum: number = + str;

        // Unions
        let val: string | number;
        val= 222;
        val= "abcd";
        // val =true;                // not allowed
        // val = {Hello: "world"};   // not allowed

        // Object destructuring
        const {empid,name, location} = this.emp;
        console.log(empid,name,location);

        // Additionaly we can get deep data out of a structure using destructuring
        const foo = {bar: {child:5645}};
        const {bar: {child}} = foo; // effectiviely const child = foo.bar.child
        console.log(`output of child: ${child}`);

        // Object destructuring using rest parameters
        const {a,b, ...remaining} = {a:1,b:2,c:3,d:4,e:5};
        console.log(a,b,remaining);     // output 1,2, {c:3,d:4,e:5}

        // Array destructuring
        const [x,y,z] = ["elem at x", "elema at y", "elem at z"];
        // Array destructuring with rest params
        let list =[1,2];
        list= [...list, 3,4];

        // Object spread
        const point2D = {x:1,y:2};
        const point3D = {...point2D, z:3};
        const merge = {...this.book, ...this.emp};

    }

    public TestScope(){
        var var1 = "Outside IF";
        let var2 = "Outside IF";
        if(true){
            var var1 = "Inside IF";
            let var2 = "Inside IF";
        }
        console.log(`output var1: ${var1}`);
        console.log(`output var2: ${var2}`);
    }

    public TestClosure(){
        const arr1: number[]= [];
        const arr2: number[]= [];
        for(var i=0;i<5;i++){
            setTimeout(() => arr1.push(i), 200);  // output 5 * 5 times
        }

        for(let i =0 ; i<5; i++){
            setTimeout(() => arr2.push(i), 200);   // output 0,1,2,3,4
        }
    }

    public TestAvailibility(){
        var var1 = "var variable";
        let var2 = "let variable";
        var var1 = "assigned again";
        // let var2 ="assigned again";   // Not allowed
    }

    public TestThis(){
        // Earlier javscript approach
        const self =this;
        this.var1 = "earlier javascript";
        setTimeout(() => {
            console.log(this);
            console.log(self);
            console.log(self.var1);
        }, 200)

        // Typescript and ES6 way of doing the same
        this.var2 = "bind this";
        setTimeout(function() {
            console.log(this);
            console.log(this.var2);
        }.bind(this), 200);
    }
}
