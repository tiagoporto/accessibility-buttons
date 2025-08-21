import { html, LitElement } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import './contrastStyles.css'
import '../transitionStyles.css'
import { storage, hasStorage } from '../utils'

export class A11yContrastButton extends LitElement {
  declare label: string
  declare addContrastLabel: string
  declare removeContrastLabel: string
  declare addContrastAriaLabel: string
  declare removeContrastAriaLabel: string

  static properties = {
    label: { type: String, attribute: false },
    ariaLabel: { type: String, attribute: false },
    addContrastLabel: { type: String, attribute: 'add-contrast-label' },
    addContrastAriaLabel: {
      type: String,
      attribute: 'add-contrast-aria-label',
    },
    removeContrastLabel: { type: String, attribute: 'remove-contrast-label' },
    removeContrastAriaLabel: {
      type: String,
      attribute: 'remove-contrast-aria-label',
    },
  }

  updateLabel(featEnabled?: boolean) {
    const addContrastLabel = this.addContrastLabel || 'Add Contrast'
    const removeContrastLabel = this.removeContrastLabel || 'Remove Contrast'
    const addContrastAriaLabel = this.addContrastAriaLabel || 'Add contrast'
    const removeContrastAriaLabel =
      this.removeContrastAriaLabel || 'Remove contrast'

    this.label = featEnabled ? removeContrastLabel : addContrastLabel
    this.ariaLabel = featEnabled
      ? removeContrastAriaLabel
      : addContrastAriaLabel
  }

  __handleClick() {
    this.updateLabel(storage('contrast'))
  }

  connectedCallback() {
    super.connectedCallback()
    this.updateLabel(hasStorage('contrast'))
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
