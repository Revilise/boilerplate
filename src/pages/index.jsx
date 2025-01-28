import { render } from "@/lib/render";
import { Document } from "@/components/document";
import {RootLayout} from "@/components/rootLayout";

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
         <div>
           <ul>
             {pages.map(({label, href}, idx) => (
                <li key={`ul-li${idx}`}>
                  <a href={href}>{label}</a>
                </li>
             ))}
           </ul>
         </div>
       </RootLayout>
     </Document>
  )
})
