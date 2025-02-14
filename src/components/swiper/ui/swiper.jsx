import clsx from "clsx";
import { SwiperSlide } from "./swiperSlide";
import {SwiperPagination} from "@/components/swiper/ui/swiperPagination";

/**
 *
 * @param extraClasses{Object}
 * @param name{string}
 * @param children{JSX.Element}
 * @param toolbar{object}
 * @param toolbar.pagination{object}
 * @returns {JSX.Element}
 * @constructor
 */
export const Swiper = ({
  extraClasses = {},
  name = "",
  children = null,
  toolbar = { pagination: false, navigation: false, scrollbar: false }
}) => {
  return (
    <div
       className={clsx("swiper", extraClasses)}
       data-core-swiper={""}
       data-core-swiper-id={name}
    >
      <div className={clsx("swiper-wrapper")}>
        {children}
      </div>

      {toolbar.pagination && (
         <div className={clsx("swiper-pagination")}>

         </div>
      )}

      {toolbar.navigation && (
         <div className={clsx("swiper-navigation")}>

         </div>
      )}

      {toolbar.scrollbar && (
         <div className={clsx("swiper-scrollbar")}>

         </div>
      )}
    </div>
  )
}

Swiper.Slide = SwiperSlide;
Swiper.Pagination = SwiperPagination;
