import Alert from "./alert-message";

/**
 * Copies text to the clipboard using the Clipboard API
 * Falls back gracefully if clipboard API is unavailable
 * @param {string} code - The text content to copy
 * @param {string} [successTitle] - Success message (default: "Code copied to clipboard!")
 * @param {string} [failureTitle] - Failure message (default: "Failed to copy code.")
 * @throws {Error} May log if clipboard access is denied
 * @example
 * copyToClipboard('git status', 'Copied!', 'Failed!');
 */
const copyToClipboard = (code, successTitle, failureTitle) => {
  if (!code) {
    Alert(failureTitle || "No code to copy.");
    return;
  }

  if (!navigator?.clipboard) {
    // Fallback for older browsers
    console.warn("Clipboard API not available, using fallback method");
    copyToClipboardFallback(code, successTitle, failureTitle);
    return;
  }

  navigator.clipboard
    .writeText(code)
    .then(() => {
      Alert(successTitle || "Code copied to clipboard!");
    })
    .catch((error) => {
      console.error("Clipboard copy failed:", error);
      Alert(failureTitle || "Failed to copy code.");
    });
};

/**
 * Fallback method for copying to clipboard (older browsers)
 * @param {string} code - The text content to copy
 * @param {string} successTitle - Success message
 * @param {string} failureTitle - Failure message
 * @private
 */
const copyToClipboardFallback = (code, successTitle, failureTitle) => {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = code;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);

    const selected = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (selected) {
      Alert(successTitle || "Code copied to clipboard!");
    } else {
      Alert(failureTitle || "Failed to copy code.");
    }
  } catch (error) {
    console.error("Fallback copy method failed:", error);
    Alert(failureTitle || "Failed to copy code.");
  }
};

/**
 * Copies selected Git commands to clipboard as concatenated text
 * @param {Array} selectedCommands - Array of command objects to copy
 * @throws Will alert user on failure
 * @example
 * const commands = [{code: 'git status'}, {code: 'git add .'}];
 * copySelected(commands);
 */
const copySelected = (selectedCommands) => {
  if (!selectedCommands || selectedCommands.length === 0) {
    Alert("No commands selected to copy.");
    return;
  }

  try {
    const selectedCode = selectedCommands
      .map((cmd) => cmd?.code)
      .filter(Boolean)
      .join("\n");

    if (!selectedCode) {
      Alert("No valid commands to copy.");
      return;
    }

    copyToClipboard(
      selectedCode,
      "Selected code copied to clipboard!",
      "Failed to copy selected code.",
    );
  } catch (error) {
    console.error("Error copying selected commands:", error);
    Alert("Failed to copy selected code.");
  }
};

export { copySelected };
export default copyToClipboard;
