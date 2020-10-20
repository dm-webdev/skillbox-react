import * as React from "react";
import { preventDefault } from "../../utils/react/preventDefault";
import { stopPropagation } from "../../utils/react/stopPropagation";
// import { withKey } from "../../utils/react/withKey";
import { getValue } from "../../utils/react/getValue";
import { getChecked } from "../../utils/react/getChecked";

// function add(leftSide: number) {
//   return (rightSide: number) => leftSide + rightSide;
// }

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

add(1)(2) // -> 2

const addOne = add(1);
const addSix = add(6);
addOne(5) // -> number


window.addEventListener("resize", ()=> {});

// function addEventListenerWithDispose(element, name, handler) {
//   element.addEventListener(name, handler);
//   return () => element.removeEventListener(name, handler);
// }

// const dispose = addEventListenerWithDispose(window, "resize", () => {
//   console.log("resize");
//   dispose();
// })


interface IBlockProps {
  title: string;
  id: string;
}

// const withIdKey = withKey("id");
// const withIndexKey = withKey();


// function Feed(props: { blocks: IBlockProps[] }) {
//   return (
//     <div>
//       {props.blocks.map((block: IBlockProps) =>
//       <Block key={block.id}{...block} />
//       )}
//     </div>
//   )
// }

// function Feed(props: { blocks: IBlockProps[] }) {
//   return (
//     <div>
//       {props.blocks.map(withIdKey(Block))}
//       <Block title="123" id="45" />
//       {React.createElement(Block, {title: "123", id: "123"}, [])}

//     </div>
//   )
// }

function Block(props: IBlockProps) {
  return (
    <div>{props.title}</div>
  )
}

///


// function Input(props: { onChange: (value: string) => void, value: string }) {
//   return (
//     <input value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)} />
//   )
// }

function Input({ onChange, value}: { onChange: (value: string) => void, value: string }) {
  return (
    <input value={value} onChange={getValue(onChange)} />
  )
}

// function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
//   return (
//     <input type="checkbox" checked={props.value} onChange={(e) => props.onChange(e.currentTarget.checked)} />
//   )
// }

function Checkbox({onChange, value}: { onChange: (value: boolean) => void, value: boolean }) {
  return (
    <input type="checkbox" checked={value} onChange={getChecked(onChange)} />
  )
}



//


// function NotStandardLink(props: any) {
//   const handelClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
//     e.stopPropagation();
//     e.preventDefault();
//     props.onClick();
//   }

//   return (
//     <a onClick={handelClick}>Hello</a>
//   )
// }

function NotStandardLink(props: any) {
    return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
  )
}



// композиция

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

function InputTwo ({value, onChange}: InputProps) {
  return (
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
  )
}

