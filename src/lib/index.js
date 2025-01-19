import { SwiperCollection } from "@/components/swiper/plugin";

try {
  const plugins = [
    new SwiperCollection()
  ];
} catch (err) {
  console.error(err);
}

