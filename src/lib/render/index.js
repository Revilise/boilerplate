import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

export function render(PageComponent) {
  return renderToStaticMarkup(<PageComponent />);
}
