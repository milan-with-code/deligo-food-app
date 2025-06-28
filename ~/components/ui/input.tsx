import { cn } from "@/lib/utils";
import * as React from "react";
import { TextInput, type TextInputProps } from "react-native";

function Input({
  className,
  placeholderClassName,
  ...props
}: TextInputProps & {
  ref?: React.RefObject<TextInput>;
}) {
  return (
    <TextInput
      className={cn(
        "h-[56px] native:h-[56px] font-jakartaMedium leading-6 tracking-wider rounded-3xl border border-input bg-background px-3 text-base native:text-base native:leading-[1.25] text-black placeholder:text-[#9CA4AB]  file:border-0 file:bg-transparent file:font-jakartaMedium",
        props.editable === false && "opacity-50",
        className
      )}
      placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
      {...props}
    />
  );
}

export { Input };
