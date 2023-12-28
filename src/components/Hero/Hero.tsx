import clsx from "clsx";
import Image from "next/image";

import * as s from "./Hero.css";
import * as w from "@/styles/whole.css"

export const Hero = () => {
  return (
    <div className={clsx(s.wrapper)}>
      <span className={clsx(s.content)}>
        <Image
          src="/img/rhappy-icon.jpg"
          alt="icon"
          width={800}
          height={800}
          className={clsx(s.hero_image, w.border)}
        />
        <h1 className={clsx(s.hero_title)}>rhappy</h1>
        <p>webにつよくなりたい。</p>
      </span>
    </div>
  );
};
