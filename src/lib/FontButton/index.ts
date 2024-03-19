import { html, LitElement } from 'lit-element'
import { storage, hasStorage } from '../utils'

class FontButton extends LitElement {
  static get properties() {
    return {
      label: { type: String, attribute: false },
      increaseLabel: { type: String },
      increaseAriaLabel: { type: String },
      decreaseLabel: { type: String },
      decreaseAriaLabel: { type: String },
    }
  }

  clickHandler() {
    storage('font')
    this.updateLabel()
  }

  // createRenderRoot() {
  //   return this
  // }

  updateLabel() {
    const decreaseLabel = this.decreaseLabel || '-A'
    const increaseLabel = this.increaseLabel || '+A'

    this.label = hasStorage('font') ? decreaseLabel : increaseLabel
    console.log("hasStorage('font') ", hasStorage('font'))
  }

  connectedCallback() {
    super.connectedCallback()
    this.updateLabel()
  }

  // disconnectedCallback() {
  //   super.disconnectedCallback()
  //   this.removeListeners()
  // }

  constructor() {
    super()

    // this.increaseLabel = '+A'
    // this.increaseAriaLabel = 'Increase Font'
    // this.decreaseLabel = '-A'
    // this.decreaseAriaLabel = 'Decrease Font'
  }

  render() {
    return html`<button @click="${this.clickHandler}">${this.label}</button>`
  }
}

customElements.define('accessibility-font', FontButton)
