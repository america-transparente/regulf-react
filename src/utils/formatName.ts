// @ts-expect-error, "Names" is not a typescript file, therefore it doesn't have types.
import namecase, { checkName } from "./names";

/**
 * Format names correctly, names often come with all uppercase or need to be cleaned
 */
export default function formatName(name: string | undefined) {
  if (name) {
    if (checkName(name.toString())) return namecase(name, {});
    return name;
  }
  return name; // if undefined or ""
}
