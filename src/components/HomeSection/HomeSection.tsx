import clsx from "clsx";
import { ReactNode } from "react";

import * as s from "./HomeSection.css";
import { Heading } from "../Heading/Heading";

interface HomeSection_Props {
  title: string;
  children: ReactNode;
}

export const HomeSection = (p: HomeSection_Props) => {
  return (
    <div className={clsx(s.wrapper)}>
      <Heading>{p.title}</Heading>
      <div className={clsx(s.content)}>{p.children}</div>
    </div>
  );
};
