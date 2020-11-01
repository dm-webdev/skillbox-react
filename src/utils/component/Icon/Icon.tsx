import React from 'react';
import styles from './icon.css';
import classNames from "classNames";

type TIconSize = 20 | 30 | 40;

export enum EIcons {
  iconRemoveBtn = "iconRemoveBtn",
  iconShareBtn = "iconShareBtn",
  iconStatBtn = "iconStatBtn",
}

interface ITextProps {
  name: EIcons;
  size?: TIconSize;
  block?: boolean;
  mobileSize?: TIconSize;
  tabletSize?: TIconSize;
  desktopSize?: TIconSize;
 }

export function Icon(props: ITextProps) {
  const {
    name,
    size, 
    block = false,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[name],
    { [styles[`m${mobileSize}`]]: mobileSize }, 
    { [styles[`t${tabletSize}`]]: tabletSize }, 
    { [styles[`d${desktopSize}`]]: desktopSize },
    { [styles.block]: block},
  );
  return (
    <span className={classes} />
  );
}