import clsx from "clsx";

import * as s from "./Heading.css";

interface Heading_Props {
  children: string;
}

export const Heading = (p: Heading_Props) => {
  return <p className={clsx(s.main)}>{p.children}</p>;
};
