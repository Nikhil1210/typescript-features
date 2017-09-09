import {VarDemo} from "./classes/variables";
import {FunctionsDemo} from "./classes/functions";
import {XYZBank} from "./model/Company";
import {Generics} from "./classes/generics";
import {TypesDemo} from "./classes/types";

document.write("<h1> Welcome to typescript!! </h1>");
// Demonstration of various types 
const varDemo:VarDemo = new VarDemo();

// Demo of various function features
const funcDemo = new FunctionsDemo();

// Abstract class
const company = new XYZBank("Bank of America", "Charlotte");
company.setLineOfBusiness(["Retail", "Investment", "private"]);
console.log(company.GetLineOfBusiness());

// generics
const gen=new Generics();

// Types demo
const typ = new TypesDemo();