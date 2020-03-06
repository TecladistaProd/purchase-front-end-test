/**
 * @function toMoney
 * @param {number} money
 * @param {boolean} [toFixed=false]
 */
export default (money, toFixed = false) =>
  (toFixed ? money.toFixed(2) : money)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
