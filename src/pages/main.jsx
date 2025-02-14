import { Document } from "@/components/document";
import { render } from "@/lib/render";
import { RootLayout } from "@/components/rootLayout";
import { Section } from "@/components/section";
import { Swiper } from "@/components/swiper";

const title = "Main page"

export default render(() => {
  return (
     <Document title={title}>
       <RootLayout>
         <Section headerSlot={<h1>LOOK AT THIS SWIPER!</h1>}>
            <Swiper name={"boilerplate-info-swiper"}>
              <Swiper.Slide>
                <div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                  massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                  quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
              </Swiper.Slide>
              <Swiper.Slide>
                <div>
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                  imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                  Cras dapibus. Vivamus elementum semper nisi.
                </div>
              </Swiper.Slide>
              <Swiper.Slide>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi.
              </Swiper.Slide>
            </Swiper>
         </Section>
       </RootLayout>
     </Document>
  )
});
