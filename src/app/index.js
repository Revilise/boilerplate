import { Core } from "@/app/core";

// msw
import("@/app/mocks/browser").then(({ worker }) => {
  worker.start({
    onUnhandledRequest: "bypass"
  });
})

export default new Core([
   // paste your plugins here
])
