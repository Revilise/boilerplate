import {Icon} from "@/components/icon";

export const Header = () => {
  return (
     <header className={"header"}>
       <div className={"header__wrapper"}>
         <div className={"header__logo"}>
           <Icon src={"revilise"} size={24} />
           <strong>Revilise`s boilerplate</strong>
         </div>

         <div className={"header__extraLinks"}>
           <a className={"header__extraLink"} href={"https://github.com/Revilise/boilerplate"}>
             <span>github.com</span>
             <Icon src={"github"} size={16} />
           </a>
         </div>
       </div>
     </header>
  )
}
