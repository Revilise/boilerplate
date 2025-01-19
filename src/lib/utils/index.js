/**
 * Extract attribute name from selector
 * @param selector{string}
 * @returns {*}
 */
export const getAttr = (selector) => {
  return selector.replaceAll(/[\[.+\]]/gi, "");
}
