/**
 * Return a greeting
 * @param name Name of person
 */
export function greet(name: string = "there"): string {
	return `Hello ${name}!`;
}

/** See how the person is doing */
export function checkUpOn(): string {
	return "How are you doing today?";
}

