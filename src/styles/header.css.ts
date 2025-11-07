import { style } from "@vanilla-extract/css";

export const headerRoot = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.3rem 0",
});

export const brandCluster = style({
  display: "flex",
  alignItems: "center",
});

export const logoMark = style({
  width: "36px",
  height: "36px",
});
