import clsx from "clsx";
import { ReactNode } from "react";
import Link from "next/link";

import * as s from "./Card.css";
import * as w from "@/styles/whole.css";

export interface Card_Props {
  title: string;
  children: ReactNode;
  href: string;
}

export const Card = (p: Card_Props) => {
  return (
    <div className={clsx(s.wrapper, w.border)}>
      <h2 className={clsx(s.card_title)}>{p.title}</h2>
      <div className={clsx(s.content)}>{p.children}</div>
      <Link
        href={p.href}
        target="_blank"
        className={clsx(w.LinkStyle)}
      >
        <p className={clsx(s.card_link)}>{p.href}</p>
      </Link>
    </div>
  );
};
