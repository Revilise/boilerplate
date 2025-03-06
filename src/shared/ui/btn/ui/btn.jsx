import {clsx} from "clsx";

export const Btn = ({
  extraClasses = {},
  extraAttrs = {},
  label = "untitled",
  type = "button"
}) => {
  const Wrapper = (props) => type === "button" ? <button {...props} /> : <a {...props} />;

  return (
     <Wrapper className={clsx("btn", extraClasses)} {...extraAttrs}>
       <span className={clsx("btn__label")}>{label}</span>
     </Wrapper>
  )
}
