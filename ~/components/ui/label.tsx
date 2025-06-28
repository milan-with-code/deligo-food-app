import { cn } from "@/lib/utils";
import * as LabelPrimitive from "@rn-primitives/label";
import * as React from "react";

function Label({
  className,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  ...props
}: LabelPrimitive.TextProps & {
  ref?: React.RefObject<LabelPrimitive.TextRef>;
}) {
  return (
    <LabelPrimitive.Root
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <LabelPrimitive.Text
        className={cn(
          "text-xs text-foreground native:text-base font-jakarta leading-none",
          className
        )}
        {...props}
      />
    </LabelPrimitive.Root>
  );
}

export { Label };
