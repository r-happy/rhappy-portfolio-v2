import clsx from "clsx";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Card, Card_Props } from "@/components/Card/Card";

const works: Card_Props[] = [
  {
    href: "https://www.ichizakasansou-bessho.com/",
    title: "市坂山荘",
    children: (
      <>
        <p>
          Wixを使って作った市坂山荘のホームページです。市坂山荘とは別所にある松茸山です。
        </p>
      </>
    ),
  },
];

export default function Works() {
  return (
    <main>
      <div className={clsx(w.container)}>
        <PageTitle>お仕事</PageTitle>
        <div className={clsx(s.content)}>
          {works.map((e, index) => {
            return (
              <Card key={index} title={e.title} href={e.href}>
                {e.children}
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
