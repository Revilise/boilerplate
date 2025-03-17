export class CollectionItem {
  instance: Element | null = null;
  selector: string = "";
  cfg: { [key: string]: unknown } = {};

  constructor(element: Element, selector: string, defaultCfg: { [key: string]: unknown } = {}) {
    try {
      this.instance = element;
      this.selector = selector;
      this.#setConfig(defaultCfg)
    }
    catch (err) {
      console.error("[CollectionItem] could not init item: ", err);
    }
  }

  #setConfig(defaultCfg: { [key: string]: unknown } = {}) {
    try {
      const attr = this.selector.replaceAll(/[\[.+\]]/gi, "");
      const rawCfg = this.instance?.getAttribute(attr);

      if (!rawCfg) {
        this.cfg = defaultCfg;
        return;
      }

      this.cfg = JSON.parse(rawCfg);

      for (let key in defaultCfg) {
        if (this.cfg[key] === undefined) {
          this.cfg[key] = defaultCfg[key];
        }
      }
    }
    catch {
      this.cfg = defaultCfg;
    }
  }
}

export class Collection {
  static isPublic = false;

  constructor(selector: string, collectionItem: (typeof CollectionItem)) {
    try {
      this.selector = selector;
      this.#collectInstances(collectionItem);
    }
    catch (err) {
      console.error("[Collection] could not init collection:", err);
    }
  }

  selector: string = "";

  collection: CollectionItem[] = [];

  #collectInstances(collectionItem: (typeof CollectionItem)) {
    document
       .querySelectorAll(this.selector)
       .forEach(element => {
         const item = new collectionItem(element, this.selector);
         this.collection.push(item)
       })
  }

  isConnected(htmlElement: HTMLElement) {
    return !!this.collection.find(plugin => plugin.instance === htmlElement);
  }
}

export class Singleton {
  static isPublic = false;

  constructor(selector: string) {
    try {
      this.selector = selector;
    }
    catch (err) {
      console.error("[Singleton] could not init instance of singleton: ", err);
    }
  }

  selector: string = "";
}
