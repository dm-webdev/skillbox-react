import React from 'react';
import styles from './icon.css';
import classNames from "classNames";

type TIconSize = 14 | 20 | 30 | 40 | 50;

export enum EIcons {
  iconRemoveBtn = "iconRemoveBtn",
  iconShareBtn = "iconShareBtn",
  iconStatBtn = "iconStatBtn",
  iconAvatarAnon = "iconAvatarAnon",
  iconMessage = "iconMessage",
  iconHideBtn = "iconHideBtn",
  iconCommentBtn = "iconCommentBtn",
  iconSaveBtn = "iconSaveBtn",
  iconComplainBtn = "iconComplainBtn",
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
