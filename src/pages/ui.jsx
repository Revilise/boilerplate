import {render} from "@/lib/render";
import {Document} from "@/components/document";
import {RootLayout} from "@/components/rootLayout";
import {Icon} from "@/components/icon";

const title = "ui-toolkit"

export default render(() => (
   <Document title={title}>
     <RootLayout>
       <div>
         <Icon src={"menu"}/>
         <span>icon-menu.svg</span>
       </div>
     </RootLayout>
   </Document>
))
