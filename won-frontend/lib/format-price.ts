const LANG = "en-US";
const CURRENCY = "USD";

/**
 * Formats a numeric value into a currency string.
 * @param {number} value - The numeric value to be formatted.
 * @returns {string} The formatted currency string.
*/
export function getFormattedCurrency(value: number): string {
  return new Intl.NumberFormat(LANG, {
    style: "currency",
    currency: CURRENCY,
  }).format(value);
}
