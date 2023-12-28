import { globalStyle } from "@vanilla-extract/css";
import { Colors } from "./color";

globalStyle(`body`, {
  backgroundColor: Colors.color.background.body,
  color: Colors.color.text.main,
});

globalStyle("p, button, td", {
  fontSize: "medium"
});

globalStyle("h2", {
  fontSize: "larger",
});

globalStyle("h1", {
  fontSize: "x-large",
});

globalStyle("body button", {
  cursor: "pointer",
});
