// Какие хуки бывают

// 1. useState
// 2. useEffect +
// 3. useRef
// 4. useReduce
// 5. useMemo   +
// 6. useContext
// 7. useCallback
// 8. useImperativeHandle
// 9. useLayoutEffect
// 10. useDebugValue

import React from "react";


export function MyHooks({ title, id }: {title: string, id: string }) {
  // React.useEffect( () => {
  //   console.log("componentDidMount");
  //   console.log("componentWillUpdate");
  // });

  // React.useEffect( () => {
  //   console.log("componentDidMount");
  // }, []);

  // React.useEffect( () => {
  //   console.log("componentWillReciveProps: ", title);
  // }, [title]);

  // React.useEffect( () => {
  //   console.log("componentDidMount");
  //   return () => {
  //     console.log("componentWillUnmount");
  //   }
  // }, []);
  // const [isMounted] = useIsMounted();

  // console.log(isMounted);

  // React.useEffect(() => {
  //   console.log("isMounted", isMounted);
  // }, [isMounted]);

  const items = 10;
  const multiplier = 5;
  const result = React.useMemo(
    () => calculate(items, multiplier),
    [items, multiplier]
  )

  return (
  // <div style={{ width: window.innerWidth }}>{ title } { id } </div>

  <div>{ title } { id } { result }</div>
  )
}

//--

function calculate(items: number, multiplier: number) {
  return new Array(items).fill(1).reduce((a, v) => a * multiplier);
}

