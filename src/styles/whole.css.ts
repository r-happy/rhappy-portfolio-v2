import { globalStyle, style } from "@vanilla-extract/css";
import { Colors } from "./color";
import { mediaQueryScreen } from "./queries";

export const border = style({
  border: `solid 2px ${Colors.color.border.main}`,
});

export const container = style({
  display: "block",
  margin: "0 auto",

  width: "90%",

  "@media": {
    [mediaQueryScreen("md")]: {
      maxWidth: "640px",
    },
  },
});

export const table = style({
  width: "100%",
});

globalStyle(`${table} tr`, {
  width: "100%",
  borderBottom: `solid 1px ${Colors.color.border.main}`,
});

globalStyle(`${table} th`, {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

globalStyle(`${table} th, td`, {
  padding: "1.5rem 0",
  width: "50%",
});

export const LinkStyle = style({
  textDecoration: "underline",
  ":hover": {
    textDecoration: "none",
  },
});

export const grid = style({
  display: "grid",
  gap: "4rem",
})