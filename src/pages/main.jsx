import { Document } from "@/components/document";
import { render } from "@/lib/render";
import {RootLayout} from "@/components/rootLayout";
import {Section} from "@/components/section";

const title = "Main page"

export default render(() => {
  return (
     <Document title={title}>
       <RootLayout>
         <Section>
           <h1>hello</h1>
         </Section>
       </RootLayout>
     </Document>
  )
});
