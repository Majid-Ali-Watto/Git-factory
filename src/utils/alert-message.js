import localAlert from "./local-alert";

/**
 * Displays a user-friendly alert message
 * @param {string} title - The message/title to display in the alert
 * @param {string} [icon='success'] - Optional icon type ('success', 'error', 'warning', 'info')
 * @throws {Error} Will log if alert fails to display
 * @example
 * Alert("Command copied successfully!");
 * Alert("Error occurred", 'error');
 */
const Alert = (title, icon = "success") => {
  try {
    localAlert.fire({
      title,
      icon,
      timer: 1000,
      showConfirmButton: false,
    });
  } catch (error) {
    console.error("Alert display failed:", error);
    // Fallback to browser alert
    alert(title);
  }
};

export default Alert;
