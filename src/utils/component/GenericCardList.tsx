
// import React from "react";

// interface IItem {
//   id: string;
//   title: string;
//   userName: string;
//   img: string;
//   // className?: string;
//   // onClick?: (id: string) => void;
//   As: string;
//   // href?: string;
// }

// interface IGenericCardProps {
//   list: IItem[];
// }

// const noop = () => {}; //ничего не делает

// export function GenericCardList({ list }: IGenericCardProps) {
//   return (
//     <>
//       { list.map(({ id, title, userName, img, As}) => (
//         <As
//           props: { title, userName, img }
//           key={ id }
//           href={ href }
//         >
//           { text }
//         </As>
//       ))}
//     </>
//   );
// }



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


