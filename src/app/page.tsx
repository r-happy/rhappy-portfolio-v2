import clsx from "clsx";

import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { OnTheWeb } from "@/components/OnTheWeb/OnTheWeb";
import { StillLearning } from "@/components/StillLearning/StillLearning";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={clsx(w.container, s.wrapper)}>
        <About />
        <OnTheWeb />
        <StillLearning />
      </div>
    </main>
  );
}
