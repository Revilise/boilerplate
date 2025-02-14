import { render } from "@/lib/render";
import { Document } from "@/components/document";
import { RootLayout } from "@/components/rootLayout";
import { Section } from "@/components/section";

const pages = [
  {
    label: "Main page",
    href: "./main.html"
  },
  {
    label: "Page 1",
    href: "./page1.html"
  }
]

export default render(() => {
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
})
