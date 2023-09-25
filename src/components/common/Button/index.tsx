import { PropsWithChildren } from "react";
import { container } from "./Button.css";

type Props = {};

const Button = ({ children }: PropsWithChildren<Props>) => {
  return <button className={container}>{children}</button>;
};

export default Button;
