import classNames from "classnames";
import React from "react";
import styles from "./text.css";

type TSizes = 28 | 20 | 16 | 14 | 12 | 10; //uniot type

export enum Ecolors {
  black = "black",
  green = "green",
  orange = "orange",
  white = "white",
  grey_F4 = "grey_F4",
  grey_F3 = "grey_F3",
  grey_D9 = "grey_D9",
  grey_C4 = "grey_C4",
  grey_99 = "grey_99",
  grey_66 = "grey_66",  
}

interface ITextProps {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "div" | "p";
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: Ecolors;
  bold?: boolean;
 }

export function Text(props: ITextProps) {
  const { As = "span", color = Ecolors.black, children, size, mobileSize, tabletSize, desktopSize, bold = false} = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize }, 
    { [styles[`t${tabletSize}`]]: tabletSize }, 
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color],
    { [styles.bold]: bold },
  );

  return (
    <As className={classes} >
      {children}
    </As>
  );
}
