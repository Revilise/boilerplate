import clsx from "clsx";

export const GridItem = ({
  extraClasses,
  extraAttrs,
  children
}) => {
  return (
     <div className={clsx("grid__item", extraClasses)} {...extraAttrs}>
       {children}
     </div>
  )
}
