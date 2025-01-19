import { Collection, CollectionItem } from "@/lib/plugin";
import { getAttr } from "@/lib/utils";

import ReactSwiper from "swiper";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import "swiper/css"
import { renderToString } from "react-dom/server";
import { SwiperPagination } from "@/components/swiper/ui/swiperPagination";

export class Swiper extends CollectionItem {
  constructor(element, selector) {
    super(element, selector, SwiperCollection.defaultCfg);
    this.init();
  }

  init() {
    const attr = getAttr(SwiperCollection.selectors.id);
    const id = this.instance.getAttribute(attr)
    const cfg = SwiperCollection.containers[id];
    this.current = new ReactSwiper(`[${attr}="${id}"]`, cfg);
  }
}

export class SwiperCollection extends Collection {
  static isPublic = true;

  static defaultCfg = {}

  static selectors = {
    instance: "[data-core-swiper]",
    id: "[data-core-swiper-id]"
  }

  static containers = {
    "boilerplate-info-swiper": {
      modules: [ Pagination ],
      autoplay: {
        delay: 2000,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: (swiper, current, total) => renderToString(<SwiperPagination current={current} total={total} />)
      }
    }
  }

  constructor() {
    super(SwiperCollection.selectors.instance, Swiper);
  }

}
