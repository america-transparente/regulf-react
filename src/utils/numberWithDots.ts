/**
 * Adds dots to long numbers
 * @example
 * numberWithDots(7930755) // returns 7.930.755
 */

export default function numberWithDots(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
