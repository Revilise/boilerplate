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

/**
 * Hook for css BEM
 * @param baseClass - основной класс блока
 */
export const useCN = (baseClass) => {
  return {
    /**
     * Creates css class by BEM rules
     * @param element - name of child element. Can be empty.
     * @param mods - mods classes.
     * @param utils - utility classes.
     */
    getCN: (element, mods = {}, utils = []) => {
      const elementClass = element ? `${baseClass}__${element}` : baseClass;
      const utilsClasses = utils.join(" ");

      const modsClasses = Object.entries(mods).map(([key, value]) => {
        return value && `${ element ? elementClass : baseClass}--${key}`
      }).filter(Boolean).join(' ');

      return [elementClass, modsClasses, utilsClasses].filter(Boolean).join(' ').trim();
    }
  }
}
