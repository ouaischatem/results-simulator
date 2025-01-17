export const formatDecimal = (num?: number): string => {
	if (num === undefined || num == null) {
		return '00.00';
	}
	const formattedNumber = num.toFixed(2);
	return formattedNumber.padStart(5, '0');
};
