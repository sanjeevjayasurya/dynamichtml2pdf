import * as fs from 'fs';
import path from 'path';
import { HTMLtoPDFConverter } from './HTMLtoPDFConverter';

// Instantiate the converter with your API key and API URL
const converter = new HTMLtoPDFConverter('your-api-key', 'http://your-api-url');

// Example usage: Convert HTML template to PDF
converter.convertHTMLtoPDF('./template.html', { name: 'John Doe', age: 30 })
  .then((pdfBuffer: Buffer) => {
    // Handle the generated PDF buffer
    fs.writeFileSync(path.resolve(__dirname, 'output.pdf'), pdfBuffer);
    console.log('PDF generated successfully');
  })
  .catch((error: Error) => {
    // Handle any errors that occurred during the conversion
    console.error('Conversion error:', error.message);
  });

converter.generatePDFFromURL('https://www.google.com')
  .then((pdfBuffer: Buffer) => {
    // Handle the generated PDF buffer
    fs.writeFileSync('output.pdf', pdfBuffer);
    console.log('PDF generated successfully');
  })
  .catch((error: Error) => {
    // Handle any errors that occurred during PDF generation from URL
    console.error('PDF generation error:', error.message);
  });