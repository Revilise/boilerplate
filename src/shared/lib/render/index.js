import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

export function render(PageComponent, props = {}) {
  return renderToStaticMarkup(<PageComponent {...props} />);
}
