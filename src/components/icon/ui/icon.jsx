import clsx from "clsx";

export const Icon = ({
  extraClasses = {},
  src
}) => {
  return (
     <svg className={clsx(`icon`,`icon-${src}`, extraClasses)}>
       <use xlinkHref={`${spritePath}#icon-${src}`} />
     </svg>
  )
}

const spritePath = "/assets/icons/index.svg";
