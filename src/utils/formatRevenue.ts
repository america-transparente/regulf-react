const { isInteger } = Number;

const revenueFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  // whole numbers
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * Formatter for our revenue figures
 */
export default function formatRevenue(
  number: number | string | undefined
): string | number | null {
  if (isInteger(number) && typeof number == "number")
    return revenueFormatter.format(number);
  if (number == "NaN" || number == "" || typeof number == "undefined")
    return null;
  if (!isNaN(number as number))
    return revenueFormatter.format(
      typeof number === "number" ? number : parseInt(number)
    );
  return number;
}
