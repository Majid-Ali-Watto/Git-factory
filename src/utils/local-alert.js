/**
 * Local Alert System - Replaces SweetAlert2
 * Lightweight, no external dependencies
 */

class LocalAlert {
  constructor() {
    this.container = null;
    this.modal = null;
    this.isOpen = false;
  }

  /**
   * Show an alert dialog
   * @param {Object} options - Alert options
   * @param {string} options.title - Alert title/message
   * @param {string} options.icon - Icon type: 'success', 'error', 'warning', 'info'
   * @param {boolean} options.showConfirmButton - Show OK button
   * @param {boolean} options.showCancelButton - Show Cancel button
   * @param {boolean} options.showCloseButton - Show close button (X)
   * @param {number} options.timer - Auto-close after milliseconds
   * @param {string} options.html - HTML content instead of title
   * @param {string} options.input - Input type: 'text', 'select'
   * @param {Object} options.inputOptions - Options for select input
   * @param {Function} options.inputValidator - Validate input
   * @returns {Promise}
   */
  fire(options = {}) {
    return new Promise((resolve) => {
      // Close existing alert if any
      if (this.isOpen) {
        this.close();
      }

      const {
        title = "",
        icon = "",
        html = "",
        showConfirmButton = true,
        showCancelButton = false,
        showCloseButton = false,
        timer = 0,
        input = null,
        inputOptions = {},
      } = options;

      // Create overlay
      this.container = document.createElement("div");
      this.container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
      `;

      // Create modal
      this.modal = document.createElement("div");
      this.modal.style.cssText = `
        background: white;
        border-radius: 8px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: slideUp 0.3s ease;
        position: relative;
      `;

      // Add close button
      if (showCloseButton) {
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = "×";
        closeBtn.style.cssText = `
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #999;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        `;
        closeBtn.onclick = () => this.close();
        this.modal.appendChild(closeBtn);
      }

      // Add icon
      if (icon) {
        const iconEl = document.createElement("div");
        const iconMap = {
          success: "✓",
          error: "✕",
          warning: "⚠",
          info: "ℹ",
        };
        const colorMap = {
          success: "#28a745",
          error: "#dc3545",
          warning: "#ffc107",
          info: "#0066cc",
        };

        iconEl.style.cssText = `
          font-size: 48px;
          color: ${colorMap[icon] || "#666"};
          text-align: center;
          margin-bottom: 15px;
        `;
        iconEl.textContent = iconMap[icon] || "ℹ";
        this.modal.appendChild(iconEl);
      }

      // Add title
      if (title) {
        const titleEl = document.createElement("h2");
        titleEl.style.cssText = `
          margin: 0 0 15px 0;
          font-size: 20px;
          color: #333;
          text-align: center;
        `;
        titleEl.textContent = title;
        this.modal.appendChild(titleEl);
      }

      // Add HTML content
      if (html) {
        const htmlEl = document.createElement("div");
        htmlEl.style.cssText = `
          margin-bottom: 15px;
          max-height: 400px;
          overflow-y: auto;
          font-size: 14px;
          color: #555;
        `;
        htmlEl.innerHTML = html;
        this.modal.appendChild(htmlEl);
      }

      // Add input
      let inputElement = null;
      if (input === "text") {
        inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.style.cssText = `
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1.5px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        `;
        this.modal.appendChild(inputElement);
      } else if (input === "select") {
        inputElement = document.createElement("select");
        inputElement.style.cssText = `
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1.5px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
        `;

        // Add default option
        const defaultOpt = document.createElement("option");
        defaultOpt.value = "";
        defaultOpt.textContent = "Select an option...";
        inputElement.appendChild(defaultOpt);

        // Add options
        Object.entries(inputOptions).forEach(([key, value]) => {
          const opt = document.createElement("option");
          opt.value = key;
          opt.textContent = value;
          inputElement.appendChild(opt);
        });

        this.modal.appendChild(inputElement);
      }

      // Add buttons container
      const buttonsContainer = document.createElement("div");
      buttonsContainer.style.cssText = `
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
      `;

      // Add buttons
      if (showConfirmButton || input) {
        const confirmBtn = document.createElement("button");
        confirmBtn.textContent = "OK";
        confirmBtn.style.cssText = `
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.2s;
        `;
        confirmBtn.onmouseover = () =>
          (confirmBtn.style.background = "#0056b3");
        confirmBtn.onmouseout = () => (confirmBtn.style.background = "#007bff");
        confirmBtn.onclick = () => {
          const value = inputElement ? inputElement.value : true;
          this.close();
          resolve({ value, isConfirmed: true });
        };
        buttonsContainer.appendChild(confirmBtn);
      }

      if (showCancelButton) {
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.style.cssText = `
          padding: 10px 20px;
          background: #6c757d;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.2s;
        `;
        cancelBtn.onmouseover = () => (cancelBtn.style.background = "#5a6268");
        cancelBtn.onmouseout = () => (cancelBtn.style.background = "#6c757d");
        cancelBtn.onclick = () => {
          this.close();
          resolve({ value: null, isConfirmed: false });
        };
        buttonsContainer.appendChild(cancelBtn);
      }

      if (showConfirmButton || showCancelButton || input) {
        this.modal.appendChild(buttonsContainer);
      }

      this.container.appendChild(this.modal);
      document.body.appendChild(this.container);
      this.isOpen = true;

      // Add animations
      const style = document.createElement("style");
      style.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `;
      document.head.appendChild(style);

      // Auto-close if timer is set
      if (timer > 0) {
        setTimeout(() => {
          if (this.isOpen) {
            this.close();
            resolve({ isConfirmed: true });
          }
        }, timer);
      }

      // Focus first focusable element
      setTimeout(() => {
        const focusable = this.modal?.querySelector(
          "input, select, button:not(.close-btn)",
        );
        focusable?.focus();
      }, 100);
    });
  }

  /**
   * Close the alert
   */
  close() {
    if (this.container && document.body.contains(this.container)) {
      this.container.style.animation = "fadeOut 0.3s ease";
      setTimeout(() => {
        document.body.removeChild(this.container);
        this.isOpen = false;
        this.container = null;
        this.modal = null;
      }, 300);
    } else {
      this.isOpen = false;
    }
  }
}

// Create singleton instance
const alertInstance = new LocalAlert();

export default alertInstance;
