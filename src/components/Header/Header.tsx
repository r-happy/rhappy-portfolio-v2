"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import * as s from "./Header.css";
import * as w from "@/styles/whole.css";
import Link from "next/link";

interface NavObject {
  href: string;
  content: string;
  blank: boolean;
}
const Navi: NavObject[] = [
  {
    href: "/",
    content: "ホーム",
    blank: false,
  },
  {
    href: "/works",
    content: "お仕事",
    blank: false,
  },
  {
    href: "/playground",
    content: "遊び場",
    blank: false,
  },
  {
    href: "https://blog.rhappy.dev",
    content: "ブログ",
    blank: true,
  },
];

export function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body;
    const initialOverflow = body.style.overflow;

    if (isActive) {
      body.style.overflow = "hidden";
    }
    return () => {
      body.style.overflow = initialOverflow;
    };
  }, [isActive]);

  return (
    <div>
      <button
        className={clsx(s.wrapper, w.border)}
        onClick={() => {
          setIsActive(!isActive);
        }}
      ></button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HeaderContent ActiveSwitchFunc={setIsActive} isActive={isActive} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface HeaderContent_Props {
  ActiveSwitchFunc: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}

const HeaderContent = (p: HeaderContent_Props) => {
  return (
    <div className={clsx(s.content_wrapper)}>
      <div className={s.content}>
        <div>
          {Navi.map((e, index) => {
            return (
              <div key={index}>
                <Link
                  href={e.href}
                  target={e.blank ? "_blank" : ""}
                  className={s.header_LinkStyle}
                  onClick={() => {
                    p.ActiveSwitchFunc(!p.isActive);
                  }}
                >
                  <h1>{e.content}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
