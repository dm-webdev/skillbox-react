import React from "react";

//Хук возвращает тру, когда компонент примонтирован
export function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return [isMounted];
}
