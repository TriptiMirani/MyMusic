// renderEjs.js
import ejs from "ejs";
import fs from "fs";
import path from "path";

/**
 * Renders an EJS template to HTML.
 * @param {string} templateName - The name of the EJS template to render.
 * @param {object} data - The data to pass to the template.
 * @param {string} outputPath - The path where the rendered HTML will be saved.
 */
export function renderTemplate(templateName, data, outputPath) {
  const templatePath = path.join(process.cwd(), "views", templateName); // Path to your main EJS file

  ejs.renderFile(templatePath, data, (err, str) => {
    if (err) {
      console.error(err);
      return;
    }
    // Write the rendered HTML to a file
    fs.writeFileSync(outputPath, str);
    console.log("HTML file created:", outputPath);
  });
}
