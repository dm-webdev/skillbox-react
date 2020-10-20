import * as React from "react";
import { getValue } from "../../utils/react/getValue";
import { preventDefault } from "../../utils/react/preventDefault";
import { stopPropagation } from "../../utils/react/stopPropagation";


function InputExample({ value, onChange }: any) {
  return (
    <input 
      value={ value }
      // onChange={ preventDefault(stopPropagation(getValue(onChange))) }
      // onChange={ compose(onChange, getValue, stopPropagation, preventDefault) }
      onChange={ pipe(preventDefault, stopPropagation, getValue, onChange) }
    />
  )
}

//выполняет функции справа - на - лево
function compose<U>( ...fns: Function[]) {  
  return <E,>(initialValue: any): U => 
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
}


//выполняет функции слева - на - право
function pipe<U>( ...fns: Function[]) {
  return <E,>(initialValue: any):U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}


// забирает из объекта свойства
function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop]
}

const some = pick("value")( { value: 1 }) // -> 1

// проверяет на равенство
function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}


const comments = [{ id: 22, text: "text one"}, { id: 25, text: "text two"}];

// const filteredComments = comments.filter(({ id }) => id !== 22)
// const filterWithId = (id: number) => pipe(pick("id"), isEqual(id), cond);
// const filteredComments = comments.filter(pipe(pick("id"), isEqual(22), cond)); //все коментарии, которые не равны 22

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);
const filterWithId = createFilterBy("id");
const filterWithValue = createFilterBy("value");
const filterWithId22 = createFilterBy("id")(22);

const filteredComments = comments.filter(filterWithId(22));


//принимает булевое/false/true значение и инвертирует его
function cond(b: boolean) {
  return !b;
}

const getValueNumber = pipe<number>(
  pick("currentTarget"),
  pick("value"),
  parseInt
)

// библиотека ramda js для типизации функций