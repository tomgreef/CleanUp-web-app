export function invalidTextSize(title, description, cp, streetNumber, street) {
	return (
		title.length < 10 ||
		description.length < 20 ||
		cp == null ||
		cp < 20000 ||
		cp > 29999 ||
		streetNumber < 0 ||
		streetNumber > 999 ||
		street.length < 10
	);
}
