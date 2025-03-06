import clsx from "clsx";
import {Btn} from "@/shared/ui/btn";

export const Modal = ({
   extraClasses,
   id,
   children,
}) => {
  return (
     <div id={id} className={clsx("modal", extraClasses)} popover={"auto"} data-core-modal={JSON.stringify({})}>
       <div className={clsx("modal__wrapper")}>
         <div className={clsx("modal__controls")}>
           <Btn
              label={"X"}
              extraClasses={["btn--isRound"]}
              extraAttrs={{
                "data-core-modal-target": JSON.stringify({ action: "hide" })
              }}
           />
         </div>
         <div className={clsx("modal__content")}>
           {children}
         </div>
       </div>
     </div>
  )
}
