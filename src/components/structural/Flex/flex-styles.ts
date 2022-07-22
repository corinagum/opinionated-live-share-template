import { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";

/** Send Flex style options via FlexColumn or FlexRow props */
export type FlexOptions = {
  children?: ReactNode;
  className?: any;
  fill?: "both" | "height" | "width" | "view";
  gap?: "smaller" | "small" | "medium" | "large";
  hAlign?: "start" | "center" | "end";
  inline?: boolean;
  name?: string;
  /**  Currently, onMouseOverChange is an event handler
   * only used in the QueueSearch > VideoQueue components  */
  onMouseOverChange?: (isHover: boolean) => void;
  spaceBetween?: boolean;
  style?: any;
  transparent?: boolean; // refactor for other background colors
  vAlign?: "start" | "center" | "end";
};

export const getFlexRowStyles = makeStyles({
  root: {
    display: "flex",
    height: "auto",
    /** Fix for flex containers:
     * minHeight/Width ensures padding is respected when
     * computing height wrt child components */
    minHeight: 0,
    minWidth: 0,
  },
  fill: {
    width: "100%",
    height: "100%",
  },
  fillH: {
    height: "100%",
  },
  // fill view
  fillV: {
    height: "100vh",
    width: "100vw",
  },
  fillW: {
    width: "100%",
  },
  gapSmaller: {
    "> :not(:last-child)": {
      marginRight: "0.5rem",
    },
  },
  gapSmall: {
    "> :not(:last-child)": {
      marginRight: "1rem",
    },
  },
  gapMedium: {
    "> :not(:last-child)": {
      marginRight: "1.5rem",
    },
  },
  gapLarge: {
    "> :not(:last-child)": {
      marginRight: "3rem",
    },
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  hAlignStart: {
    justifyContent: "start",
  },
  hAlignCenter: {
    justifyContent: "center",
  },
  hAlignEnd: {
    justifyContent: "end",
  },
  inline: {
    display: "inline-flex",
  },
  transparent: {
    backgroundColor: "transparent",
  },
  vAlignStart: {
    alignItems: "start",
  },
  vAlignCenter: {
    alignItems: "center",
  },
  vAlignEnd: {
    alignItems: "end",
  },
  wrap: {
    flexWrap: "wrap",
  },
});

export const getFlexColumnStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    /** Fix for flex containers:
     * minHeight/Width ensures padding is respected when
     * computing height wrt child components */
    minHeight: 0,
    minWidth: 0,
  },
  fill: {
    width: "100%",
    height: "100%",
  },
  fillH: {
    height: "100%",
  },
  // fill view
  fillV: {
    height: "100vh",
    width: "100vw",
  },
  fillW: {
    width: "100%",
  },
  gapSmaller: {
    "> :not(:last-child)": {
      marginBottom: "0.5rem",
    },
  },
  gapSmall: {
    "> :not(:last-child)": {
      marginBottom: "1rem",
    },
  },
  gapMedium: {
    "> :not(:last-child)": {
      marginBottom: "1.5rem",
    },
  },
  gapLarge: {
    "> :not(:last-child)": {
      marginBottom: "3rem",
    },
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  hAlignStart: {
    alignItems: "start",
  },
  hAlignCenter: {
    alignItems: "center",
  },
  hAlignEnd: {
    alignItems: "end",
  },
  inline: {
    display: "inline-flex",
  },
  isSidePanel: {
    maxWidth: "24rem",
  },
  scroll: {
    overflowY: "auto",
    msOverflowStyle: "auto",
    maxHeight: "100vh",
  },
  transparent: {
    backgroundColor: "transparent",
  },
  vAlignStart: {
    justifyContent: "start",
  },
  vAlignCenter: {
    justifyContent: "center",
  },
  vAlignEnd: {
    justifyContent: "end",
  },
});
export const getFlexItemStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  noShrink: {
    flexShrink: 0,
  },
});
