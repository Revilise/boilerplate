import clsx from "clsx";

export const Section = ({
  headerSlot,
  extraClasses,
  children
}) => {
  return (
     <section className={clsx('section', extraClasses)}>
       {headerSlot && <div className={"section__header"}>{headerSlot}</div>}
       <div className={"section__content"}>
          {children}
        </div>
     </section>
  )
}
