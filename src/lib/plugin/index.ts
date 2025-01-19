export class CollectionItem {
  instance: Element | null = null;
  selector: string = "";
  cfg: { [key: string]: unknown } = {};

  constructor(element: Element, selector: string, defaultCfg: { [key: string]: unknown } = {}) {
    this.instance = element;
    this.selector = selector;
    this.#setConfig(defaultCfg)
  }

  #setConfig(defaultCfg: { [key: string]: unknown }) {
    for (let key in defaultCfg) {
      if (this.cfg[key] === undefined) {
        this.cfg[key] = defaultCfg[key];
      }
    }
  }
}

export class Collection {
  static isPublic = false;

  constructor(selector: string, collectionItem: (typeof CollectionItem)) {
    this.selector = selector;
    this.#collectInstances(collectionItem);
    this.#injectToPublicCore();
  }

  selector: string = "";

  collection: CollectionItem[] = [];

  #injectToPublicCore() {
    if (this.constructor?.isPublic) {
      if (!window.Core) {
        window.Core = {} as { [key: string]: Collection };
      }

      window.Core[this.constructor.name] = this;
    }
  }

  #collectInstances(collectionItem: (typeof CollectionItem)) {
    document
       .querySelectorAll(this.selector)
       .forEach(element => {
         const item = new collectionItem(element, this.selector);
         this.collection.push(item)
       })
  }
}
