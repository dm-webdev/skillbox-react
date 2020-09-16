// TASK-1: concat('Hello ', 'World') // -> Hello World;

function concatStr(strOne: string, strTwo: string): string {
  return strOne.concat(strTwo);
}
let resultConcat = concatStr("Hello ", "world");

type TFnConcat = (strOne: string, strTwo: string) => string;
const concat: TFnConcat = (strOne = "Hello ", strTwo = "world") => {
  return strOne + strTwo;
};

// TASK-2: Написать интерфейс

interface IMyHometask {
  howIDolt: string;
  someArray: Array<string | number>;
  withDate: { howIDolt: string; someArray: Array<string | number> }[];
}

const MyHometask: IMyHometask = {
  howIDolt: "I Do It Wel",
  someArray: ["string one", "string two", 42],
  withDate: [
    { howIDolt: "I Do It Wel", someArray: ["string one", "string two", 42] },
  ],
};

// TASK-3: Типизация функции, используя Generic

interface IMyArrayReduce<T> {
  [N: number]: T;

  reduce(fn: (accumulator: T, value: T) => T, initialValue: number): T;
}

const arNumber: IMyArrayReduce<number> = [1, 2, 3];
const initialValue: number = 0;
arNumber.reduce((ac, val) => ac + val, initialValue);

const arString: IMyArrayReduce<string> = ["1", "2", "3"];
arNumber.reduce((ac, val) => ac + val, initialValue);

// TASK-4: Работа с mapped types

interface IHomeTask {
  data: string;
  numberData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  };
}

type TMyPartialFour<T> = {
  [N in keyof T]?: T[N] extends object ? TMyPartialFour<T[N]> : T[N];
};

const homeTask: TMyPartialFour<IHomeTask> = {
  externalData: {
    value: "win",
  },
};

const homeTask2: TMyPartialFour<IHomeTask> = {
  externalData: {
    value: "win",
    basis: 15,
  },
};

// TASK-5: Работа с Generic, mapped types, type inference Nr.1

import * as React from "react";

interface IProps {
  firstProps: string;
  secondProp: number;
}

function HomeComponent(props: { firstProps: string; secondProp: number }) {
  return <div>{[props.firstProps, props.secondProp]}</div>;
}

type TMyType<T> = T extends React.ComponentType<infer props> ? props : never;
type TProps = TMyType<typeof HomeComponent>;
const t: TProps = {
  firstProps: "string",
  secondProp: 152,
};
console.log(t);

// TASK-6: Работа с Generic, mapped types, type inference Nr.2

let divE: TDivProps = {
  className: "class",
  id: "body",
  "aria-hidden": true,
  // firstProp: "string",
};

type TDivProps = TGetJSXPropsProp<"div">;

type TAllProps<K extends keyof JSX.IntrinsicElements> = {
  [N in K]: JSX.IntrinsicElements[N];
};

type TGetJSXPropsProp<K extends keyof JSX.IntrinsicElements> = Exclude<
  TAllProps<K>[keyof TAllProps<K>],
  React.DOMAttributes<null>
>;