import React from 'react';
import { useSelector } from 'react-redux';
import { useTokenRedux } from "../../hooks/useTokenRedux";
import { TRootReducer } from '../../store/rootReducer';
import { Alert } from './Common/Allert';
import { Loader } from './Common/Loader';
import styles from "./layout.css";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  useTokenRedux();
  const isLoading = useSelector<TRootReducer, boolean>(state => state.app.isLoading);
  const isAlert = useSelector<TRootReducer, boolean>(state => state.app.isAlert);
  
  return (
    <div className={styles.container}>
      {children}

      {isLoading && <Loader />}

      {isAlert && <Alert />}
    </div>
  );
}