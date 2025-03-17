import {http, HttpResponse, JsonBodyType} from "msw";

export interface IMock<Base> {
  endpoint: string,
  type: "get" | "patch" | "post" | "delete",
  response: Base,
  timeout?: number,
  // format: "json" //| "xml" | "text" | "formData" | "arrayBuffer" | "error"
}

export function createMock<Base extends JsonBodyType>({ endpoint, type, response, timeout }: IMock<Base>) {
  return http[type](endpoint, ():any => {
    if (timeout) {
      return new Promise((resolve) => {
        setTimeout(resolve, timeout);
      }).then(() => HttpResponse.json<Base>(response))
    }

    return HttpResponse.json<Base>(response);
  });
}
