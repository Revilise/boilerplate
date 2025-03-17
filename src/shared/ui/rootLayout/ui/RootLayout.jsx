import {Header} from "@/shared/ui/header";

export const RootLayout = ({ children }) => {
  return (
     <div className={"page"}>
       <div className={"page__header"}>
         <Header />
       </div>
       <main className={"page__content"}>
         {children}
       </main>
     </div>
  )
}
