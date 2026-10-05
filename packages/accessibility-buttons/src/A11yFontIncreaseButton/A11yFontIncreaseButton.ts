import { html, LitElement } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import './fontStyles.css'
import '../transitionStyles.css'
import { storage, hasStorage } from '../utils'

export class A11yFontIncreaseButton extends LitElement {
  declare label: string
  declare ariaLabel: string

  static properties = {
    label: { type: String, attribute: 'increase-label' },
    ariaLabel: { type: String, attribute: 'increase-aria-label' }
  }

  constructor() {
    super()
    this.label = 'A+'
    this.ariaLabel = 'Increase font size'
  }

  __handleClick() {
    storage('font', 'increase')
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

  