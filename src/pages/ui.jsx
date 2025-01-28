import {render} from "@/lib/render";
import {Document} from "@/components/document";
import {RootLayout} from "@/components/rootLayout";
import {Section} from "../components/section";
import {Stack} from "react-bootstrap";
import {Icon} from "../components/icon";

const title = "ui-toolkit"

const icons = [
  {
    src: "menu",
    desc: "icon-menu.svg"
  },
  {
    src: "revilise",
    desc: "icon-revilise.svg"
  },
  {
    src: "github",
    desc: "icon-github.svg"
  }
]

export default render(() => (
   <Document title={title}>
     <RootLayout>
       <Section>
          <Stack direction={"horizontal"} gap={4}>
            {icons.map(({ src, desc }) => (
               <Stack direction={"vertical"} className={"align-items-center justify-content-between flex-grow-0"} gap={2}>
                 <Icon src={src} size={16} />
                 <strong>{desc}</strong>
               </Stack>
            ))}
          </Stack>
       </Section>
     </RootLayout>
   </Document>
))
