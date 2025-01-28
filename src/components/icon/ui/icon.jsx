import clsx from "clsx";

export const Icon = ({
  extraClasses = {},
  size,
  src
}) => {
  return (
     <svg className={clsx(`icon`,`icon-${src}`, size && `icon--size${size}`, extraClasses)}>
       <use xlinkHref={`${spritePath}#icon-${src}`} />
     </svg>
  )
}

const spritePath = "/assets/icons/index.svg";
