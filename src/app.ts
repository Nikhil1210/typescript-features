import {Point, ThirdDimension} from "./classes/dynamicExtendClasses";
import {FunctionsDemo} from "./classes/functions";
import {Generics} from "./classes/generics";
import KeyofDemo from "./classes/keyOf";
import {TypesDemo} from "./classes/types";
import {VarDemo} from "./classes/variables";
import {XYZBank} from "./model/Company";

document.write("<h1> Welcome to typescript!! </h1>");
// Demonstration of various types
const varDemo: VarDemo = new VarDemo();

// Demo of various function features
const funcDemo = new FunctionsDemo();

// Abstract class
const company = new XYZBank("Bank of America", "Charlotte");
company.setLineOfBusiness(["Retail", "Investment", "private"]);
console.log(company.GetLineOfBusiness());

// Dynamic imports
function LoadDynamic() {
    import ("./classes/dynamicImport");
}
LoadDynamic();
// generics
const gen=new Generics();

// Types demo
const typ = new TypesDemo();

// Keyof demo
const varKeyof = new KeyofDemo();

// Dynamically extend classes
const Point3D = ThirdDimension(Point);
const p = new Point3D();
p.z = -1;
