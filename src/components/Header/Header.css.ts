import { Colors } from "@/styles/color";
import { mediaQueryScreen } from "@/styles/queries";
import {  style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "fixed",
  top: "1rem",
  right: "1rem",
  height: "48px",
  width: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  zIndex: "20",
  transition: "all 0.3s",
  ':hover': {
    scale: "0.8"
  },

  "@media": {
    [mediaQueryScreen("md")]: {
      height: "72px",
      width: "72px",
    },
  },
});

export const content_wrapper = style({
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100dvh",
  color: Colors.color.text.header,
  zIndex: "10",
  background: Colors.color.background.header.content,
});

export const content = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const header_LinkStyle = style({
  ":hover": {
    textDecoration: "underline"
  },
});
