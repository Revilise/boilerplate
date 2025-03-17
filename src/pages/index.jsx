import { render } from "@/shared/lib/render";
import { Document } from "@/shared/ui/document";
import { RootLayout } from "@/shared/ui/rootLayout";
import { Section } from "@/shared/ui/section";

const pages = [
  {
    label: "Index page",
    href: "./index.html"
  },
]

const Page = () => {
  return (
     <Document>
       <RootLayout>
         <Section headerSlot={<h1>Your renders:</h1>}>
           <ul>
             {pages.map(({label, href}, idx) => (
                <li key={`ul-li${idx}`}>
                  <a href={href}>{label}</a>
                </li>
             ))}
           </ul>
         </Section>
       </RootLayout>
     </Document>
  )
}

export default render(Page)
