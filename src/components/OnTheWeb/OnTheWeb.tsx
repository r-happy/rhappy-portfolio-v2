import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import clsx from "clsx";

import * as w from "@/styles/whole.css";
import { HomeSection } from "../HomeSection/HomeSection";
import Link from "next/link";

type LinksType = {
  icon: JSX.Element;
  name: string;
  nickname: string;
  href: string;
};

const Links: LinksType[] = [
  {
    icon: <GitHubIcon />,
    name: "github",
    nickname: "r-happy",
    href: "https://github.com/r-happy",
  },
  {
    icon: <TwitterIcon />,
    name: "X(?)",
    nickname: "rhappy435130",
    href: "https://twitter.com/rhappy435130",
  },
];

export const OnTheWeb = () => {
  return (
    <HomeSection title="webの住み処">
      <table className={clsx(w.table)}>
        <tbody>
          {Links.map((e, index) => {
            return (
              <tr key={index}>
                <th>
                  {e.icon}
                  <p>{e.name}</p>
                </th>
                <td>
                  <Link
                    href={e.href}
                    target="_blank"
                    className={clsx(w.LinkStyle)}
                  >
                    <p>@ {e.nickname}</p>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </HomeSection>
  );
};
