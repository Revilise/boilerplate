import {Collection} from "@/shared/lib/plugin";

export class Core {
  plugins = [];

  static selectors = {
    app: "[data-core-app]"
  }

  constructor(plugins) {
    this.init(plugins);
  }

  init(plugins) {
    try {
      this.appInstance = document.querySelector(Core.selectors.app);
      window.App = {};

      for (const plugin of plugins) {
        const instance = new plugin();
        this.plugins.push(instance);

        if (plugin.isPublic) {
          window.App[plugin.name] = instance;
        }
      }

      this.selectors = this.plugins.map(plugin => plugin.constructor.selectors.instance);

      this.#connectObserver();
    }
    catch (err) {
      console.error("[Core] failed to init: "+err);
    }
  }

  get appElement() {
    return document.querySelector(Core.selectors.app);
  }

  #connectObserver() {
    if (this.appInstance) {
      const observer = new MutationObserver((mut, obs) => this.#onHtmlMutate(mut, obs))
      observer.observe(this.appInstance, { childList: true, subtree: true });
    }
  }

  #onHtmlMutate(mutations) {
    const lastMutation = mutations.at(-1);
    if (lastMutation.type === "childList") {
      this.selectors.forEach(selector => {
        const elems = lastMutation.target.querySelectorAll(selector);
        const collection = this.plugins.find(plugin => {
          if (plugin instanceof Collection) {
            return plugin.constructor.selectors.instance === selector
          }
        });

        for (const elem of elems) {
          if (!collection.isConnected(elem)) {
            collection.push(elem);
          }
        }
      })
    }
  }

}
