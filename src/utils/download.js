import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2pdf from "html2pdf.js";

const FILE_NAME = "git-commands-by-Majid-Ali";

/**
 * Adds footer with page number and author info to PDF document
 * @param {Object} doc - jsPDF document instance
 * @param {number} pageCount - Current page number
 * @private
 */
const addFooter = (doc, pageCount) => {
  const dev = "Developer and Author - Majid Ali";
  const footerText = `Page No. ${pageCount} - ${dev}`;
  const pageWidth = doc.internal.pageSize.width;
  const textWidth = doc.getTextWidth(footerText);
  const x = (pageWidth - textWidth) / 2;
  const y = doc.internal.pageSize.height - 10;

  doc.setFontSize(10);
  doc.setFont("Helvetica", "normal");
  doc.textWithLink(footerText, x + 30, y, {
    url: "https://majidev.netlify.app/",
  });
};

/**
 * Extracts all CSS rules from loaded stylesheets
 * @returns {string} Concatenated CSS rules
 * @private
 */
const getStyles = () => {
  return Array.from(document.styleSheets)
    .map((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules)
          .map((rule) => rule.cssText)
          .join("\n");
      } catch (error) {
        console.warn("Could not access stylesheet:", styleSheet, error);
        return "";
      }
    })
    .join("\n");
};

/**
 * Toggles display property of multiple elements
 * @param {HTMLElement[]} elements - Elements to toggle
 * @param {string} [display='none'] - Display value to set
 * @private
 */
const toggleDisplay = (elements, display = "none") => {
  if (!elements) return;
  elements.forEach((el) => {
    if (el) el.style.display = display;
  });
};

/**
 * Downloads Git commands as a formatted PDF table
 * @param {Array} filteredCommands - Array of command objects to download
 * @throws {Error} If PDF generation fails
 * @example
 * const commands = [{name: 'git status', ...}];
 * downloadPDFTable(commands);
 */
const downloadPDFTable = (filteredCommands) => {
  if (!filteredCommands || filteredCommands.length === 0) {
    console.warn("No commands to download");
    return;
  }

  try {
    const doc = new jsPDF();
    let pageCount = 0;

    // Add header
    doc.setFontSize(18);
    doc.setFont("Helvetica", "bold");
    doc.text("Git Commands Table", 14, 15);

    // Define table content and styles
    const tableColumn = ["Name", "Description", "Example", "Code"];
    const tableRows = filteredCommands.map((command) => [
      command.name || "",
      command.description || "",
      command.example || "",
      command.code || "",
    ]);

    const columnStyles = {
      0: { cellWidth: 50 },
      1: { cellWidth: 40 },
      2: { cellWidth: 40 },
      3: { cellWidth: 50 },
    };

    // Add table to PDF
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      columnStyles,
      theme: "grid",
      styles: {
        fontSize: 12,
        cellPadding: 3,
        overflow: "linebreak",
        halign: "left",
        valign: "top",
      },
      headStyles: {
        fillColor: [0, 100, 255],
        textColor: [255, 255, 255],
        fontSize: 14,
        fontStyle: "bold",
      },
      pageBreak: "auto",
      didDrawPage: (data) => {
        pageCount = data.pageNumber;
        addFooter(doc, pageCount);
      },
    });

    // Save the PDF
    doc.save(`${FILE_NAME}.pdf`);
  } catch (error) {
    console.error("PDF download failed:", error);
    throw new Error("Failed to generate PDF");
  }
};

/**
 * Downloads commands as an HTML file with preserved styles
 * @param {React.MutableRefObject} commandsListHTMLRef - Ref to HTML element
 * @throws {Error} If download fails
 * @example
 * downloadHTMLFile(commandsListHTMLRef);
 */
const downloadHTMLFile = (commandsListHTMLRef) => {
  if (!commandsListHTMLRef?.current) {
    console.warn("Commands list reference not found");
    return;
  }

  try {
    const element = commandsListHTMLRef.current;
    const htmlContent = element.innerHTML;
    const styles = getStyles();

    const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Git Commands List</title>
    <style>${styles}</style>
</head>
<body style="padding:10px 20px;">
    <div class="commands-list">${htmlContent}</div>
</body>
</html>
    `;

    const blob = new Blob([fullHTML], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${FILE_NAME}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error("HTML download failed:", error);
    throw new Error("Failed to generate HTML file");
  }
};

/**
 * Downloads commands as a formatted PDF document (list style)
 * @param {React.MutableRefObject} commandsListRef - Ref to commands list element
 * @throws {Error} If PDF generation fails
 * @example
 * downloadPDFasList(commandsListRef);
 */
const downloadPDFasList = (commandsListRef) => {
  if (!commandsListRef?.current) {
    console.warn("Commands list reference not found");
    return;
  }

  try {
    const element = commandsListRef.current;

    // Check if element has content
    const commandCards = element.querySelectorAll(".command-card");
    if (commandCards.length === 0) {
      console.warn("No commands found to download");
      return;
    }

    const doc = new jsPDF();
    let pageCount = 0;
    let yPosition = 20;

    // Add header
    doc.setFontSize(20);
    doc.setFont("Helvetica", "bold");
    doc.text("Git Commands List", 14, yPosition);

    doc.setFontSize(11);
    doc.setFont("Helvetica", "normal");
    doc.text(`Total Commands: ${commandCards.length}`, 14, yPosition + 8);

    yPosition += 20;

    // Extract and format each command
    commandCards.forEach((card, index) => {
      // Get command elements
      const nameEl = card.querySelector(".command-title");
      const descEl = card.querySelector(".command-description");
      const exampleEl = card.querySelector(".command-example");
      const codeEl = card.querySelector("code");
      const categoryEl = card.querySelector(".command-category");
      const diffEl = card.querySelector(".difficulty-badge");

      const name = nameEl?.textContent || "";
      const description = descEl?.textContent || "";
      const code = codeEl?.textContent || "";
      const category = categoryEl?.textContent || "";
      const difficulty = diffEl?.textContent || "";

      // Check if we need a new page
      if (yPosition > doc.internal.pageSize.height - 40) {
        pageCount++;
        doc.addPage();
        yPosition = 20;
        addFooter(doc, pageCount);
      }

      // Add command name and metadata
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(12);
      doc.text(`${index + 1}. ${name}`, 14, yPosition);

      // Add category and difficulty
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(9);
      yPosition += 6;
      const metaText = `Category: ${category} | Difficulty: ${difficulty}`;
      doc.text(metaText, 14, yPosition);

      // Add description
      yPosition += 5;
      doc.setFontSize(10);
      const descLines = doc.splitTextToSize(description, 180);
      doc.text(descLines, 14, yPosition);
      yPosition += descLines.length * 4 + 3;

      // Add code/command
      doc.setFont("Courier", "normal");
      doc.setFontSize(9);
      doc.setFillColor(240, 240, 240);
      doc.rect(14, yPosition - 2, 180, 8, "F");
      doc.text(`$ ${code}`, 16, yPosition + 3);
      yPosition += 10;

      // Add spacing between commands
      yPosition += 3;
    });

    // Add footer to last page
    pageCount = doc.internal.pages.length - 1;
    addFooter(doc, pageCount);

    // Save the PDF
    doc.save(`${FILE_NAME}-list.pdf`);
  } catch (error) {
    console.error("PDF list download failed:", error);
    throw new Error("Failed to download PDF: " + error.message);
  }
};

/**
 * Downloads commands filtered by category as PDF table
 * @param {Array} filteredCommands - Array of command objects filtered by category
 * @param {string} categoryName - Name of the category for the filename
 * @throws {Error} If PDF generation fails
 */
const downloadPDFByCategory = (filteredCommands, categoryName = "commands") => {
  if (!filteredCommands || filteredCommands.length === 0) {
    console.warn("No commands to download");
    return;
  }

  try {
    const doc = new jsPDF();
    let pageCount = 0;

    // Add header
    doc.setFontSize(18);
    doc.setFont("Helvetica", "bold");
    doc.text(`Git Commands - ${categoryName}`, 14, 15);

    // Add count
    doc.setFontSize(11);
    doc.setFont("Helvetica", "normal");
    doc.text(`Total: ${filteredCommands.length} commands`, 14, 23);

    // Define table content and styles
    const tableColumn = ["Name", "Difficulty", "Description"];
    const tableRows = filteredCommands.map((command) => [
      command.name || "",
      getDifficultyBadgeText(command.difficulty),
      command.description || "",
    ]);

    const columnStyles = {
      0: { cellWidth: 50 },
      1: { cellWidth: 30 },
      2: { cellWidth: 80 },
    };

    // Add table to PDF
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 32,
      columnStyles,
      theme: "grid",
      styles: {
        fontSize: 10,
        cellPadding: 3,
        overflow: "linebreak",
        halign: "left",
        valign: "top",
      },
      headStyles: {
        fillColor: [0, 100, 255],
        textColor: [255, 255, 255],
        fontSize: 12,
        fontStyle: "bold",
      },
      pageBreak: "auto",
      didDrawPage: (data) => {
        pageCount = data.pageNumber;
        addFooter(doc, pageCount);
      },
    });

    // Save the PDF
    doc.save(`${FILE_NAME}-${categoryName.replace(/\s+/g, "-")}.pdf`);
  } catch (error) {
    console.error("Category PDF download failed:", error);
    throw new Error("Failed to generate PDF");
  }
};

/**
 * Downloads commands filtered by difficulty as PDF table
 * @param {Array} filteredCommands - Array of command objects filtered by difficulty
 * @param {string} difficultyLevel - Difficulty level for the filename
 * @throws {Error} If PDF generation fails
 */
const downloadPDFByDifficulty = (filteredCommands, difficultyLevel = "all") => {
  if (!filteredCommands || filteredCommands.length === 0) {
    console.warn("No commands to download");
    return;
  }

  try {
    const doc = new jsPDF();
    let pageCount = 0;

    // Add header
    doc.setFontSize(18);
    doc.setFont("Helvetica", "bold");
    doc.text(`Git Commands - ${capitalizeWord(difficultyLevel)} Level`, 14, 15);

    // Add count
    doc.setFontSize(11);
    doc.setFont("Helvetica", "normal");
    doc.text(`Total: ${filteredCommands.length} commands`, 14, 23);

    // Define table content and styles
    const tableColumn = ["Name", "Category", "Description"];
    const tableRows = filteredCommands.map((command) => [
      command.name || "",
      command.category || "",
      command.description || "",
    ]);

    const columnStyles = {
      0: { cellWidth: 50 },
      1: { cellWidth: 30 },
      2: { cellWidth: 80 },
    };

    // Add table to PDF
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 32,
      columnStyles,
      theme: "grid",
      styles: {
        fontSize: 10,
        cellPadding: 3,
        overflow: "linebreak",
        halign: "left",
        valign: "top",
      },
      headStyles: {
        fillColor: [0, 100, 255],
        textColor: [255, 255, 255],
        fontSize: 12,
        fontStyle: "bold",
      },
      pageBreak: "auto",
      didDrawPage: (data) => {
        pageCount = data.pageNumber;
        addFooter(doc, pageCount);
      },
    });

    // Save the PDF
    doc.save(`${FILE_NAME}-${difficultyLevel}.pdf`);
  } catch (error) {
    console.error("Difficulty PDF download failed:", error);
    throw new Error("Failed to generate PDF");
  }
};

/**
 * Helper function to get difficulty badge text
 * @private
 */
const getDifficultyBadgeText = (difficulty) => {
  const badges = {
    beginner: "🟢 Beginner",
    intermediate: "🟡 Intermediate",
    advanced: "🔴 Advanced",
  };
  return badges[difficulty] || difficulty;
};

/**
 * Helper function to capitalize first letter
 * @private
 */
const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export {
  downloadPDFTable,
  downloadHTMLFile,
  downloadPDFasList,
  downloadPDFByCategory,
  downloadPDFByDifficulty,
};
