import { Core } from "@/app/core";
import { ModalSingleton } from "@/shared/ui/modal/model";
import { SwiperCollection } from "@/shared/ui/swiper/model";


if (process.env.NODE_ENV !== "production") {
  // msw
  import("@/app/mocks/browser").then(({worker}) => {
    worker.start({
      onUnhandledRequest: "bypass"
    });
  })
}

export default new Core([
   ModalSingleton,
   SwiperCollection
])
