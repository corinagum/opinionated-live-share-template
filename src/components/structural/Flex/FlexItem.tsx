import { FC, ReactNode } from "react";
import { mergeClasses } from "@fluentui/react-components";
import { getFlexItemStyles } from "./flex-styles";

export type FlexItemOptions = {
  children: ReactNode;
  grow?: boolean | number;
  noShrink?: boolean;
  style?: any;
};
export const FlexItem: FC<FlexItemOptions> = (props) => {
  const { children, grow, noShrink, style } = props;
  const flexItemStyles = getFlexItemStyles();
  const mergedClasses = mergeClasses(grow ? flexItemStyles.grow : "", noShrink ? flexItemStyles.noShrink : "");

  return (
    <div className={mergedClasses} style={style}>
      {children}
    </div>
  );
};
