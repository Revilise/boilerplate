import {render} from "@/shared/lib/render";
import {Document} from "@/shared/ui/document";
import {RootLayout} from "@/shared/ui/rootLayout";
import {Section} from "@/shared/ui/section";
import {Grid} from "@/shared/ui/grid";
import {Icon} from "@/shared/ui/icon";
import {Flex} from "@/shared/ui/flex";

const title = "ui-toolkit"

const Page = () => {
  return (
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
  )
}

export default render(Page)
