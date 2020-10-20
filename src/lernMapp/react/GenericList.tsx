
import React from "react";

interface IItem {
  id: string;
  text: string;  
  className?: string;
  onClick?: (id: string) => void;
  As?: "a" | "li" | "button" | "div";
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {}; //ничего не делает

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      { list.map(({ As = "div", text, onClick = noop, className, id, href}) => (
        <As
          className={ className }
          onClick={ () => onClick(id) }
          key={ id }
          href={ href }
        >
          { text }
        </As>
      ))}
    </>
  );
}



// interface IItem {
//   value: string;
//   id: string;
//   onClick: (id: string) => void;
// }

// interface IMyListProps {
//   list: IItem[];
  // onClick: (id: string) => void;
// }

// export function MyList({ list, onClick }: IMyListProps) {
// export function MyList({ list }: IMyListProps) {
//   return (
//     <ul>
//       { list.map((item: IItem) => (
        // <li onClick={ () => onClick(item.id) } key={item.id}>{ item.value }</li>
        // <li onClick={ item.onClick } key={item.id}>{ item.value }</li>
        // <li onClick={ () => item.onClick(item.id) } key={item.id}>{ item.value }</li>


//       ))}
//     </ul>
//   )
// }


