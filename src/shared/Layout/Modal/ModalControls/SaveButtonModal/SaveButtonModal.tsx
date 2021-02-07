import React from 'react';
import styles from './savebuttonmodal.css';
import { Icon, EIcons } from '../../../../../utils/component/Icon';
import { ICard } from '../../../../../store/contentReducer/contentReducer';

interface ISaveButtonModal {
  content: ICard;
}

export function SaveButtonModal( { content }: ISaveButtonModal) {
  return (
    <button type="button" className={ styles.saveBtn } aria-label="сохранить">
      <Icon name={ EIcons.iconSaveBtn } size={ 14 } />      
      <span className={ styles.saveBtn__title }>Сохранить</span>
    </button>
  );
}
