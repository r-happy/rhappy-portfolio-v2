import { Colors } from "@/styles/color";
import { mediaQueryScreen } from "@/styles/queries";
import { keyframes, style } from "@vanilla-extract/css";

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

  "@media": {
    [mediaQueryScreen("md")]: {
      height: "72px",
      width: "72px",
    },
  },
});

export const is_active_wrapper = style({
  background: Colors.color.background.header.button.active,
  transition: "0.3s",
  zIndex: "20",

  ":hover": {
    background: Colors.color.background.header.button.notactive,
  },
});

export const not_active_wrapper = style({
  transition: "0.3s",

  ":hover": {
    background: Colors.color.background.header.button.active,
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
  transition: "all 0.3s",
  display: "inline-block",
  ":hover": {
    transform: "translate(1.2rem,0)",
  },
});
