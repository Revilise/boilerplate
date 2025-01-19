import clsx from "clsx";

export const SwiperSlide = ({
  extraClasses = {},
  extraAttrs = {},
  children
}) => {
  return (
     <div className={clsx("swiper-slide", extraClasses)} {...extraAttrs}>
       {children}
     </div>
  )
}
