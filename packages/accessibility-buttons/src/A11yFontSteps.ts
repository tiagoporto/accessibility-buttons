export const DEFAULT_STEPS = 3
const BASE_ATTR = 'data-a11y-font-base-size'
const STEP_ATTR = 'data-a11y-font-step'
const PER_STEP = 0.1 // 10% por etapa

export function getCurrentStep(): number {
  const document_ = document.documentElement
  return Number.parseInt(document_.getAttribute(STEP_ATTR) || '0', 10)
}

export function applyStep(step: number) {
  const document_ = document.documentElement
  document_.setAttribute(STEP_ATTR, String(step))

  let base = Number.parseFloat(document_.getAttribute(BASE_ATTR) || '')
  if (!base || isNaN(base)) {
    base = Number.parseFloat(getComputedStyle(document_).fontSize) || 16
    document_.setAttribute(BASE_ATTR, String(base))
  }

  const scale = 1 + step * PER_STEP
  document_.style.fontSize = `${base * scale}px`
}
