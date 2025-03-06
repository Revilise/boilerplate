import clsx from "clsx";

export const FlexItem = ({
  extraClasses,
  extraAttrs,
  children
}) => {
  return (
     <div className={clsx("flex__item", extraClasses)} {...extraAttrs}>
       {children}
     </div>
  )
}
