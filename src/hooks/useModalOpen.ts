import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export function useModalOpen() {
  const ref = useRef<HTMLDivElement>(null);

  const history = useHistory()

  useEffect(() => {
    function handleClick(ev: MouseEvent) {
      if (ev.target instanceof Node && !ref.current?.contains(ev.target)) {
        history.push("/");
      }
    }
    document.addEventListener("click", handleClick);

    function handleDownKey(ev: KeyboardEvent) {
      if (ev.key == "Escape") {
        history.push("/");
      }
    }

    document.addEventListener("keydown", handleDownKey);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleDownKey);
    };
  }, []);

  return [ref];
}
