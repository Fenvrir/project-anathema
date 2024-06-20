import { classNames } from "@/shared/lib/className";
import * as classes from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";
import { ValueOf } from "type-fest";

const ThemeButton = {
  CLEAR: "clear",
} as const;

type ThemeButtonType = ValueOf<typeof ThemeButton>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButtonType;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { ThemeButton, Button };
