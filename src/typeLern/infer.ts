// Ключевое слово as - type-кастинг или приведение к типу

const mistake = [] as Array<number>;
mistake.push(1);
mistake.push(2);

// большой объект:

let bigObj = {
  id: "art1259456",
  toolName: "Лобзик электрический Electric jigsaw",
  img: "img/jigsaw.jpg",
  toolText:
    "Лобзик применяется для короткого и фигурного распила деревянных и металлических поверхностей.",
  availability: true,
  quantity: 10,
  price: 1500,
  toolComment: [
    {
      activity: true,
      commentAutorName: "Василий Иванович",
      commentDate: "2020-01-01T01:01:01.000Z",
      commentText: "Для ровных пропилов он не годится, пилка стоит криво.",
      commentPositives: "Лучше чем ничего.",
      commentNegatives: "Даже его низкая цена не стоит его качества.",
    },
    {
      commentAutorName: "Петр Петрович",
      activity: true,
      commentDate: "2020-02-23T01:12:01.000Z",
      commentText: "С задачей по укладке ламината справился на отлично.",
      commentPositives: "Не ведёт не косит.",
      commentNegatives: "Пойдет.",
    },
  ],
};

bigObj.availability = false;

// ключевое слово typeof

type TMyBigObj = typeof bigObj;

// сделаем их readonly

const typedBigObj: Readonly<TMyBigObj> = bigObj; //переопределение типа

// typedBigObj.availability = true;
typedBigObj.toolComment[0].activity = false;

type MyReadonly = {
  readonly [N in "test1" | "test2"]: N; //аналог - цикл для типов
};

// for (let N of ["test1", "test2"]) {}

const some: MyReadonly = {
  test1: "test1",
  test2: "test2",
};

type MyReadonly1 = {
  readonly [N in keyof TMyBigObj]: N; //аналог - цикл для типов
};

const some1: MyReadonly1 = {
  id: "id",
  toolName: "toolName",
  img: "img",
  toolText: "toolText",
  availability: "availability",
  quantity: "quantity",
  price: "price",
  toolComment: "toolComment",
};

// type TObjKeys = "id" | "toolName" | "img" | "toolText" | "availability" | "quantity" | "price" | "toolComment"
type TObjKeys = keyof TMyBigObj;

type TCommitType = TMyBigObj['toolComment']; // получение типа ключа через строковое значение

// type MyReadonly2 = {
//   readonly [N in keyof TMyBigObj]: TMyBigObj[N]; //аналог - цикл для типов
// };

type MyReadonly2<T> = {
  readonly [N in keyof T]: T[N]; //аналог - цикл для типов: mapped types
};


const some2: MyReadonly2<TMyBigObj> = {
  id: "test",
  toolName: "test",
  img: "test",
  toolText: "test",
  availability: true,
  quantity: 20,
  price: 1500,
  toolComment: [],
}

// напишем тип my partial

type MyPartial<T> = {
  [N in keyof T]?: T[N]; // делает все ключи в объекте необязательными
}

// type pick - забирает ключи из объекта

type MyPick<T, K extends keyof T> = { //T - объект(интерфейс), K - ключи
  [N in K]: T[N];
}

type picked = Pick<TMyBigObj, "toolComment">;
type MiPicked = MyPick<TMyBigObj, "toolComment">;

// type readonly для всей глубины объекта (extends object) - расширяет объект (прототипируется от объекта);

type MyRaadOnlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyRaadOnlyDeep<T[N]> : T[N];
}

const typeBigObjDeep: MyRaadOnlyDeep<TMyBigObj> = bigObj;

// typeBigObjDeep.id = "1111";
// typeBigObjDeep.toolComment[1].activity = false;


// тип который уберет readonly;

type TSomeType = MyRaadOnlyDeep<TMyBigObj>;

// infer - вычисление аргумента generic-а: type inference  

type RemoveReadonly<T> = T extends MyRaadOnlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>;

// пример использования

function greaterThenZero(a: number, b:string) {
  return a > 0;
};

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type TReturnType = FnReturnType<typeof greaterThenZero>;


type FnParams<T> = T extends ((...args: infer R) => any) ? R : never;
type TArgsType = FnParams<typeof greaterThenZero>;