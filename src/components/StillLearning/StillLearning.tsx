import clsx from "clsx";

import * as w from "@/styles/whole.css";

import { HomeSection } from "../HomeSection/HomeSection";

const frontendSkills: string[] = ["HTML", "CSS", "JavaScript"];
const frameworks: string[] = ["Nextjs"];
const libraries: string[] = ["tailwindcss", "firebase", "vanilla-extract"];
const tools: string[] = ["vscode", "neovim", "Github", "Vercel"];

export const StillLearning = () => {
  return (
    <HomeSection title="勉強してるもの">
      <table className={clsx(w.table)}>
        <tbody>
          <tr>
            <th>Frontend</th>
            <td>
              {frontendSkills.map((Skill, index) => (
                <p key={index}>{Skill}</p>
              ))}
            </td>
          </tr>
          <tr>
            <th>Framework</th>
            <td>
              {frameworks.map((framework, index) => (
                <p key={index}>{framework}</p>
              ))}
            </td>
          </tr>
          <tr>
            <th>Library</th>
            <td>
              {libraries.map((library, index) => (
                <p key={index}>{library}</p>
              ))}
            </td>
          </tr>
          <tr>
            <th>Tools</th>
            <td>
              {tools.map((tool, index) => (
                <p key={index}>{tool}</p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </HomeSection>
  );
};
