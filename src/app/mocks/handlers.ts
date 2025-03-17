import {API} from "@/shared/lib/consts";
import {createMock} from "@/app/mocks/lib";

export const handlers = [
   createMock<any>({
      endpoint: `${API}/example`,
      type: "get",
      response: { success: "hello world!" }
   })
]
