import { Colors } from "@/styles/color";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
  height: "240px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: `solid 2px ${Colors.color.border.main}`,
  marginTop: "4.5rem",
});
