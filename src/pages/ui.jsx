import {render} from "@/lib/render";
import {Document} from "@/components/document";
import {RootLayout} from "@/components/rootLayout";
import {Section} from "@/components/section";
import {Grid} from "@/components/grid";
import {Icon} from "@/components/icon";
import {Flex} from "@/components/flex";

const title = "ui-toolkit"

export default render(() => (
   <Document title={title}>
     <RootLayout>
       <Section headerSlot={<h1>UI TOOLKIT</h1>}>
         <Grid>
           <Flex extraClasses={["flex--column", "flex--justifyCenter"]}>
             <Icon src={"menu"}/>
             <span>icon-menu.svg</span>
           </Flex>
         </Grid>
       </Section>
     </RootLayout>
   </Document>
))
