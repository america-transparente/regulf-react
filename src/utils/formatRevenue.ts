const { isInteger } = Number;

const revenueFormatter = new Intl.NumberFormat('es-CL', {
	style: 'currency',
	currency: 'CLP',
	// whole numbers
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});

/**
 * Formatter for our revenue figures
 */
export default function formatRevenue(number: any): string | null {
	if (isInteger(number)) return revenueFormatter.format(number);
	if (number == 'NaN' || number == '') return null;
	if (!isNaN(number)) return revenueFormatter.format(parseInt(number));
	return number;
}
