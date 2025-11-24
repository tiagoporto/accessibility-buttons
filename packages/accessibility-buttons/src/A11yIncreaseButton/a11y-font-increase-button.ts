import { DEFAULT_STEPS, getCurrentStep, applyStep } from '../A11yFontSteps'

export class A11yFontIncreaseButton extends HTMLElement {
  private btn!: HTMLButtonElement

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    this.btn = document.createElement('button')
    this.btn.type = 'button'
    this.btn.textContent = this.getAttribute('label') || '+A'
    this.btn.addEventListener('click', () => this.handleClick())
    shadow.append(this.btn)
  }

  static get observedAttributes() {
    return ['label', 'steps']
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    if (name === 'label' && this.btn) {
      this.btn.textContent = newValue || '+A'
    }
  }

  private getSteps(): number {
    const s = Number.parseInt(this.getAttribute('steps') || String(DEFAULT_STEPS), 10)
    return Number.isNaN(s) ? DEFAULT_STEPS : s
  }

  private handleClick() {
    const steps = this.getSteps()
    const current = getCurrentStep()
    const next = Math.min(steps, current + 1)
    applyStep(next)
  }
}

if (!customElements.get('accessibility-font-increase')) {
  customElements.define('accessibility-font-increase', A11yFontIncreaseButton)
}

export default A11yFontIncreaseButton
