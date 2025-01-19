import clsx from "clsx";

export const SwiperPagination = ({
   extraClasses,
   current,
   total
}) => {
  return (
     <div className={clsx("swiper-pagination__wrapper", extraClasses)}>
       <span className={"swiper-pagination__current"}>{current}</span>
       <span className={"swiper-pagination__separator"}>/</span>
       <span className={"swiper-pagination__total"}>{total}</span>
     </div>
  )
}
