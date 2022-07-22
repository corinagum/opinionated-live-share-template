import { FC } from "react";
import { mergeClasses } from "@fluentui/react-components";
import { FlexOptions, getFlexRowStyles } from "./flex-styles";

export interface IFlexRowOptions extends FlexOptions {
  wrap?: boolean;
}

export const FlexRow: FC<IFlexRowOptions> = (props) => {
  const {
    children,
    // Merged classes from parent
    className,
    fill,
    gap,
    hAlign,
    name,
    spaceBetween,
    style,
    transparent,
    vAlign,
    wrap,
  } = props;
  const flexRowStyles = getFlexRowStyles();
  const mergedClasses = mergeClasses(
    flexRowStyles.root,
    fill === "both" && flexRowStyles.fill,
    fill === "height" && flexRowStyles.fillH,
    fill === "view" && flexRowStyles.fillV,
    fill === "width" && flexRowStyles.fillW,
    gap === "smaller" && flexRowStyles.gapSmaller,
    gap === "small" && flexRowStyles.gapSmall,
    gap === "medium" && flexRowStyles.gapMedium,
    gap === "large" && flexRowStyles.gapLarge,
    hAlign === "center" && flexRowStyles.hAlignCenter,
    hAlign === "end" && flexRowStyles.hAlignEnd,
    hAlign === "start" && flexRowStyles.hAlignStart,
    spaceBetween && flexRowStyles.spaceBetween,
    transparent && flexRowStyles.transparent,
    vAlign === "center" && flexRowStyles.vAlignCenter,
    vAlign === "end" && flexRowStyles.vAlignEnd,
    vAlign === "start" && flexRowStyles.vAlignStart,
    wrap && flexRowStyles.wrap,
    className && className,
  );
  return (
    <div data-name={!!name ? name : undefined} className={mergedClasses} style={style}>
      {children}
    </div>
  );
};
