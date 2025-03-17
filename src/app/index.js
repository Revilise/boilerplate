import { Core } from "@/app/core";

if (process.env.NODE_ENV !== "production") {
  // msw
  import("@/app/mocks/browser").then(({ worker }) => {
    worker.start({
      onUnhandledRequest: "bypass"
    });
  })
}

export default new Core([
   // paste your plugins here
])
