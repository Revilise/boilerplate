import { Singleton } from "@/shared/lib/plugin";
import {getAttr, getCfg} from "@/shared/lib";

export class ModalSingleton extends Singleton {
  /**
   * if true makes ModalSingleton available on window.App
   * @type {boolean}
   */
  static isPublic = false;

  static targetDefaultCfg = {
    src: "",
    action: "show"
  }

  static selectors = {
    instance: "[data-core-modal]",
    target: "[data-core-modal-target]",
  }

  static enums = {
    actions: {
      show: "show",
      hide: "hide"
    }
  }

  /**
   * Open modal by id
   * @param id{string} - target modal id (without hashtag)
   */
  static show(id) {
    const modal = ModalSingleton.getTarget(id);

    if (modal) {
      modal.showPopover();
    }
  }

  /**
   * Hide modal by id
   * @param id{string} - target modal id (without hashtag)
   */
  static hide(id) {
    const modal = ModalSingleton.getTarget(id);

    if (modal) {
      modal.hidePopover();
    }
  }

  /**
   * Get target html element of popover by id
   * @param id
   * @returns {Element}
   */
  static getTarget(id) {
    return document.querySelector(`[id="${id}"][popover]`);
  }

  constructor() {
    super(ModalSingleton.selectors.instance);
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener("click", (event) => this.#handleDocOnClick(event));
  }

  #handleDocOnClick(event) {
    const attr = getAttr(ModalSingleton.selectors.target);

    if (event.target.getAttribute(attr)) {
      const cfg = getCfg(event.target, ModalSingleton.selectors.target, ModalSingleton.targetDefaultCfg);

      if (!cfg.src) {
        const modal = event.target.closest(ModalSingleton.selectors.instance);
        cfg.src = modal.id;
      }

      switch(cfg.action) {
        case ModalSingleton.enums.actions.show: {
          ModalSingleton.show(cfg.src);
          break;
        }
        case ModalSingleton.enums.actions.hide: {
          ModalSingleton.hide(cfg.src)
          break;
        }
      }
    }
  }
}
