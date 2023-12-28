import { style } from "@vanilla-extract/css";

export const wrapper = style({});

export const main = style({
  position: "relative",
  width: "fit-content",
  transform: "translate(0)",
  transformStyle: "preserve-3d",
  zIndex: "-1",
  ":before": {
    content: "",
    position: "absolute",
    inset: "0",
    transform: "translate3d(0,0,-1px)",
    background:
      "conic-gradient(from 90deg at 40% -25%, #fffde4, #9ed494, #65aa74)",
    filter: "blur(20px)",
  },
});
