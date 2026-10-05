import { html, LitElement } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import './fontStyles.css'
import '../transitionStyles.css'
import { storage, hasStorage } from '../utils'

export class A11yFontDecreaseButton extends LitElement {
  declare label: string
  declare ariaLabel: string

  static properties = {
    label: { type: String, attribute: 'decrease-label' },
    ariaLabel: { type: String, attribute: 'decrease-aria-label' }
  }

  constructor() {
    super()
    this.label = 'A-'
    this.ariaLabel = 'Decrease font size'
  }

  __handleClick() {
    storage('font', 'decrease')
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
