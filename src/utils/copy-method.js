import Alert from "./alert-message";

const copyToClipboard = (code, successTitle, failureTitle) => {
	navigator.clipboard
		.writeText(code)
		.then(() => {
			Alert(successTitle || "Code copied to clipboard!");
		})
		.catch(() => {
			Alert(failureTitle || "Failed to copy code.");
		});
};
const copySelected = (selectedCommands) => {
	const selectedCode = selectedCommands.map((c) => c.code).join("\n");
	copyToClipboard(selectedCode, "Selected code copied to clipboard!", "Failed to copy selected code.");
};
export { copySelected };
export default copyToClipboard;
