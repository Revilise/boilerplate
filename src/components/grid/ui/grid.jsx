import clsx from "clsx";
import { GridItem } from "@/components/grid/ui/gridItem";

export const Grid = ({
  extraClasses = {},
  extraAttrs = {},
  children
}) => {
  return (
     <div className={clsx("grid", extraClasses)} {...extraAttrs}>
       {children}
     </div>
  )
}

Grid.Item = GridItem;
