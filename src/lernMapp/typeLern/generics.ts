// Generics

const myArray: MyArray<number> = [1, 1, 3];

// interface MyArray {
//   [N: number]: any  //index signature
// }

interface MyArray<T> {
  [N: number]: T  //generic
}

const myVar: MyArray<number | string> = [12, 23, 23];
let vat = myVar[0];

// myArray.map
[1, 2, 3].map((f, index, arr) => f + 1); // -> [2, 3, 4]

// добавляем кастомный метод map

interface MyArrayMap<T> {
  [N: number]: T 

  map<U>(fn: (al: T, index: number, arr: MyArray<T>) => U): MyArray<U>
}

const myArrayMap: MyArrayMap<number> = [1, 1, 3];
myArrayMap.map((f) => f + 1);
let v = myArrayMap.map((f) => `f + ${f}`);

// для функций generic - !АРГУМЕНТ ДЛЯ ТИПОВ!

function identity<T>(arg: T): T {
  return arg
}

let result = identity(12);

//-----------------

function getLen<T extends Array<any>>(arr: T): number {  //наследование от массива!!
  return arr.length
}

let x = getLen(["kjf", "df", "df"]);

//-------------------

interface IValueWithType<T> { //венгерская нотация!!!
  type: string;
  value: T
}

function withType<U> (arg: U): IValueWithType<U> {
  return {
    type: typeof arg,
    value: arg,
  }
}
let df = withType("Hallo");

// встроенные generics

interface IExsample<T> {
  type: string;
  value: T;
  isEmpty: boolean;
}

// Omit - выкидывает определенные ключи
const omittedObj: Omit<IExsample<string>, "isEmpty" | "value"> = {
  type: "string",
} 


//picked - выбирает определенные ключи
const pickedObj: Pick<IExsample<string>, "isEmpty"> = {
  isEmpty: true,
}

// partial - определяет все ключи как необязательные - может породить большое количество if-ов

const partial: Partial<IExsample<object>> = {
  type: "123",
}