import * as fs from "fs";
import path from "path";
import { HTMLtoPDFConverter } from "./lib/html-to-pdf-converter";

// Instantiate the converter with your API key and API URL
const converter = new HTMLtoPDFConverter();

// Example usage: Convert HTML template to PDF
converter
  .convertHTMLtoPDF(path.resolve(__dirname, "./templates/template.html"), {
    name: "John Doe",
    age: 30,
  })
  .then((pdfBuffer: Buffer) => {
    // Handle the generated PDF buffer
    fs.writeFileSync(path.resolve(__dirname, "output.pdf"), pdfBuffer);
    console.log("PDF generated successfully");
  })
  .catch((error: Error) => {
    // Handle any errors that occurred during the conversion
    console.error("Conversion error:", error.message);
  });
