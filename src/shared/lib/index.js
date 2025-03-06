/**
 * Extract attribute name from selector
 * @param selector{string}
 * @returns {*}
 */
export const getAttr = (selector) => {
  return selector.replaceAll(/[\[.+\]]/gi, "");
}

/**
 * Parse config attribute to object
 * @param element{Element}
 * @param selector{string}
 * @param defaultCfg{{ [key: string]: unknown }}
 */
export const getCfg = (element, selector, defaultCfg = {}) => {
  try {
    const rawCfg = element.getAttribute(getAttr(selector));
    const cfg = JSON.parse(rawCfg);

    for (const key in defaultCfg) {
      if (cfg[key] === undefined) {
        cfg[key] = defaultCfg[key];
      }
    }

    return cfg;
  }
  catch {
    return defaultCfg;
  }
}
