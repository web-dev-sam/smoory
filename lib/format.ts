export function formatAmount(amount: number): string {
  if (amount === 0.25) return '¼'
  if (amount === 0.5) return '½'
  if (amount === 0.75) return '¾'
  if (amount === 0.33 || amount === 0.333) return '⅓'
  if (amount === 0.67 || amount === 0.666) return '⅔'

  if (Number.isInteger(amount)) return amount.toString()

  if (Math.abs(amount - Math.round(amount)) < 0.01) {
    return Math.round(amount).toString()
  }

  return amount.toFixed(1).replace(/\.0$/, '')
}
