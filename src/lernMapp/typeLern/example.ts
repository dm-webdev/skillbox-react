// JS Types                             // typeof
// ctrl + shift + b

import ts from "typescript";

const str = "string";                   // typeof str -> "string"
const num = 3;                          // typeof num -> "number"
const nan = NaN;                        // typeof nan -> "number"
const obj = {};                         // typeof obj -> "object"
const arr = [];                         // typeof arr -> "object"
const nul = null;                       // typeof nul -> "object"
const sym = Symbol();                   // typeof sym -> "symbol"
const und = undefined;                  // typeof und -> "undefined"
const _void = void 0;                   // typeof _void -> "undefined"
const bool = false;                     // typeof bool -> "boolean"
const fn = () => {};                    // typeof fn -> "function"


let tsStr: string = "string";
tsStr = "1";

function sumJS(arr: any) {
  if (arr instanceof Array) {
    return arr.reduce((a, v) => a + v);
  };
  throw new Error('type mismatch');
}

function sumTS(arr: number[]) {
  return arr.reduce((a, b) => a + b);
}

sumTS([1, 2]);

// "some" + 2 -> "some2"
// "some" - 2 -> NaN
// "2" + 2 -> "22"
// "2" - 2 -> NaN

const tsNumber = 2;
const tsString = "str";
const result = tsString + tsNumber;
const resultTwo = parseInt(tsString) - tsNumber;


if (typeof tsString === "number") {
  const resultThree = tsString - tsNumber;
};

// 3.2 Работа с массивами

//Union type

let strOrNumber: string | number = 2;
strOrNumber = 'str';

// type alias

type StrOrNumber = string | number;

const strOrNumber1: StrOrNumber = "str2";
const strOrNumber2: StrOrNumber = 5;


type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

// Array 

const tsArray: number[] = [1, 2, 4];
const tsArrayGeneric: Array<number> = [2, 4, 20];

const unionArray: (string | number)[] = [1, 4, "str"];
const unionArray2: Array<string | number> = [1, 4, "str"];

// Tuple - fix length 

const myTuple: [number, string] = [5, "example"];
const [val1, val2] = myTuple;

// const [state, setState] = useState();


// 3.3 Работа с объектами и интерфейсами

// Object

const myObj: {a: number, b:string} = {a: 1, b: "2"};



type MyObjType = {a: number, b: string};
const myObj2:MyObjType = {a: 4, b: "test"};



interface MyInterface {                   //interface !предпочтительнее для объектов
  readonly a: number;
  b: string;
  c?: number[];  
  // e: number | undefined;
};
const myObj3: MyInterface = {
  a: 1,
  b: "test",
  c: [1, 3,],
}

const value = myObj3.a;
const value2 = myObj3.b;
const value3 = myObj3.c;

const myObj4: MyInterface = {
  a: 1,
  b: "test",
}

if (myObj4.c) {
  const valC = myObj4.c;
}


const ApiAnswer: IndexInterface = {
  key: "test1",
  key2: "test2",
}

let val5 = ApiAnswer.key;

interface IndexInterface { // index signature
  [n: string]: string;
}

// 3.4 Типизация функций и типы Type Script;

function calculate (method: "add" | "sub", left: number, right: number): number {
  switch(method) {
    case "add": return left + right;
    case "sub": return left - right;
  }
};

calculate("add", 10, 20);

enum Methods {                    //энам!!!
  add = 0,
  sub = 1,
};

function calculate2 (method: Methods, left: number, right: number): number {
  switch(method) {
    case Methods.add: return left + right;
    case Methods.sub: return left - right;
  }
};

// console.log(Methods.add -> 0)

type TypeFn = () => number;        //для функций !предпочтительнее alias
const ArrowFn: TypeFn = () => {
 return 2 + 2;
}

interface FnInterface {
  (a: number): void;
}

const ArrowFn2: FnInterface = (a) => 2*a; 


// Типы TypeScript

type StrangeTsTypes = any | unknown | never;

const some: any = "2";   //отключение типизации
some.reduce();

const un: unknown = "4"; //противоположность any до определения типа переменной, операции невозможны
// un.reduce(), - ошибка

if (typeof un === "string") {
  un.concat();
};


function voidFn(): void { //функция, которая ничего не возвращает

};
const someValue = voidFn();

function neverFn(): never { //функция, которая никогда не оканчивается
  throw new Error("my exception");
};
const someValue2 = neverFn();
