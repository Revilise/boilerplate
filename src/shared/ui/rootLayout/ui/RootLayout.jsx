import {Header} from "@/shared/ui/header";

export const RootLayout = ({ children }) => {
  return (
     <div className={"page"}>
       <Header />
       <main className={"page__content"}>
         {children}
       </main>
     </div>
  )
}
