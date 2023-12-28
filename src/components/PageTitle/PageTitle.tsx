import clsx from "clsx";

import * as s from "./PageTitle.css";

interface PageTitle_Props {
  children: string;
}

export const PageTitle = (p: PageTitle_Props) => {
  return <h1 className={clsx(s.main)}>{p.children}</h1>;
};
