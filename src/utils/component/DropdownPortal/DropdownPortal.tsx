import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./dropdownportal.css";

interface IDropdownPortal {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  styleClass?: string;
  onOpen?: () => void;
  onClose?: () => void;
  id: string;
  nodeId: string;
}

const NOOP = () => {};

export function DropdownPortal({
  nodeId,
  button,
  children,
  isOpen,
  styleClass,
  onClose = NOOP,
  onOpen = NOOP,
}: IDropdownPortal) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const insertNode = document.querySelector(`#${nodeId}`);
  if (!insertNode) return null;

  return ReactDOM.createPortal(
    <div className={`${styles.container} ${styleClass}`}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>,
    insertNode
  );
}
