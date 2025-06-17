import { html, css, LitElement } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import './fontStyles.css'
import { storage, hasStorage } from '../utils'

export class A11yFontSizeButton extends LitElement {
  // static styles = css`
  //   :host {
  //     background-color: black;
  //     /* color: var(--a11y-button-contrast-text-color, #aa0a0a); */
  //   }
  // `

  static get properties() {
    return {
      label: { type: String, attribute: false },
      ariaLabel: { type: String, attribute: false },
      increaseLabel: { type: String, attribute: 'increase-label' },
      increaseAriaLabel: { type: String, attribute: 'increase-aria-label' },
      decreaseLabel: { type: String, attribute: 'decrease-label' },
      decreaseAriaLabel: { type: String, attribute: 'decrease-aria-label' },
    }
  }

  updateLabel(featEnabled?: boolean) {
    const increaseLabel = this.increaseLabel || 'A+'
    const decreaseLabel = this.decreaseLabel || 'A-'
    const increaseAriaLabel = this.increaseAriaLabel || 'Increase Font'
    const decreaseAriaLabel = this.decreaseAriaLabel || 'Decrease Font'

    this.label = featEnabled ? decreaseLabel : increaseLabel
    this.ariaLabel = featEnabled ? decreaseAriaLabel : increaseAriaLabel
  }

  __handleClick() {
    this.updateLabel(storage('font'))
  }

  connectedCallback() {
    super.connectedCallback()
    this.updateLabel(hasStorage('font'))
  }

  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <button
        type="button"
        aria-label=${ifDefined(
          this.ariaLabel === null ? undefined : this.ariaLabel,
        )}
        @click=${this.__handleClick}
      >
        ${this.label}
      </button>
    `
  }
}
