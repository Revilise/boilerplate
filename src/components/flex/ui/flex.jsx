import clsx from "clsx";
import { FlexItem } from "@/components/flex/ui/flexItem";

export const Flex = ({
  extraClasses = {},
  extraAttrs = {},
  children
}) => {
  return (
     <div className={clsx("flex", extraClasses)} {...extraAttrs}>
       {children}
     </div>
  )
}

Flex.Item = FlexItem;
