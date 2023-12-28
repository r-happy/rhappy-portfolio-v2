import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
  height: "40dvh",
  minHeight: "320px",
  maxHeight: "560px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const content = style({});

export const hero_image = style({
  borderRadius: "100%",
  margin: "0 auto 2rem auto",
  display: "block",
  width: "160px",
  height: "160px",
  objectFit: "cover",
});

export const hero_title = style({});
