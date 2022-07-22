import { FC } from "react";
import { mergeClasses } from "@fluentui/react-components";
import { FlexOptions, getFlexColumnStyles } from "./flex-styles";

export interface IFlexColumnOptions extends FlexOptions {
  /** Unique property for styles for Side Panel or Tab content */
  isSidePanel?: boolean;
  scroll?: boolean;
}

export const FlexColumn: FC<IFlexColumnOptions> = (props) => {
  const {
    children,
    // Merged classes from parent
    className,
    fill,
    gap,
    hAlign,
    name,
    // QueueSearch Prop:
    onMouseOverChange,
    scroll,
    spaceBetween,
    transparent,
    style,
    vAlign,
  } = props;
  const flexColumnStyles = getFlexColumnStyles();
  const mergedClasses = mergeClasses(
    flexColumnStyles.root,
    fill === "both" && flexColumnStyles.fill,
    fill === "height" && flexColumnStyles.fillH,
    fill === "view" && flexColumnStyles.fillV,
    fill === "width" && flexColumnStyles.fillW,
    gap === "smaller" && flexColumnStyles.gapSmaller,
    gap === "small" && flexColumnStyles.gapSmall,
    gap === "medium" && flexColumnStyles.gapMedium,
    gap === "large" && flexColumnStyles.gapLarge,
    hAlign === "center" && flexColumnStyles.hAlignCenter,
    hAlign === "end" && flexColumnStyles.hAlignEnd,
    hAlign === "start" && flexColumnStyles.hAlignStart,
    scroll && flexColumnStyles.scroll,
    spaceBetween && flexColumnStyles.spaceBetween,
    transparent && flexColumnStyles.transparent,
    vAlign === "center" && flexColumnStyles.vAlignCenter,
    vAlign === "end" && flexColumnStyles.vAlignEnd,
    vAlign === "start" && flexColumnStyles.vAlignStart,
    className && className,
  );

  return (
    <div
      data-name={!!name ? name : undefined}
      className={mergedClasses}
      onMouseEnter={onMouseOverChange && ((_) => onMouseOverChange(true))}
      onMouseLeave={onMouseOverChange && ((_) => onMouseOverChange(false))}
      style={style}
    >
      {children}
    </div>
  );
};
