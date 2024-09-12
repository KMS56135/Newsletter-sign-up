import { createElement } from "../../../lib/createElement.js"

export function modalTemplate() {
  return createElement(`
    <div class='modal'>
      <div class='modal__svg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
      </div>
      <h2 class='modal__title'>Thanks for subscribing!</h2>
      <p class='modal__text'>
        A confirmation email has been sent to <span class='modal__email'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.
      </p>
      <button class='modal__button button'>Dismiss message</button>

    </div>
    `)
}