import clsx from "clsx";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Card, Card_Props } from "@/components/Card/Card";

const toys: Card_Props[] = [
  {
    href: "https://cyber-security-useragent.rhappy.dev/",
    title: "user-agent",
    children: (
      <>
        <p>同好会で作ったuser-agentを変えるとフラグが得られるサイトです。</p>
      </>
    ),
  },
];

export default function Playground() {
  return (
    <main>
      <div className={clsx(w.container)}>
        <PageTitle>遊び場</PageTitle>
        <div className={clsx(s.content, w.grid)}>
          {toys.map((e, index) => {
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
