import React from 'react';
import styles from './complainbuttonmodal.css';
import { Icon, EIcons } from '../../../../../utils/component/Icon';
import classNames from "classnames";


interface IComplainButtonModal {
  id: string;
  name: "complainBtn__title" | "complainBtnComment__title"
}

export function ComplainButtonModal({ id, name }: IComplainButtonModal) {
  const classes = classNames(
    styles[name],
  );

  return (
    <button type="button" className={ styles.complainBtn } aria-label="пожаловаться">
      <Icon name={ EIcons.iconComplainBtn } size={ 14 } />      
      <span className={ classes }>Пожаловаться</span>
    </button>
  );
}
