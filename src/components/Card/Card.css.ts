import { Colors } from "@/styles/color";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  borderRadius: "1rem",
  background: Colors.color.background.Card
});

export const card_title = style({
  borderBottom: `solid 1px ${Colors.color.border.main}`,
});

export const card_link = style({
  textAlign: "right",
  width: "100%",
});
