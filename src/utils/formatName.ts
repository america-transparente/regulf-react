import namecase, { checkName } from './names';

/**
 * Format names correctly, names often come with all uppercase or need to be cleaned
 */
export default function formatName(name: any): string {
	try {
		const stringName = name.toString();
		if (checkName(stringName)) return namecase(name, {});
		return name;
	} catch (err) {
		// this error occurs when the name is undefined, no worries, nothing breaks
		return name;
	}
}
