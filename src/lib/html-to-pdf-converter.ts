import * as fs from "fs";
import * as handlebars from "handlebars";
import * as puppeteer from "puppeteer";
import path from "path";

export class HTMLtoPDFConverter {
  public async convertHTMLtoPDF(
    templatePath: string,   
    variableData: Record<string, any>
  ): Promise<Buffer> {
    try {
      // Read the HTML template file
      const templateContent = fs.readFileSync(
        path.resolve(templatePath),
        "utf8"
      );
      // Compile the Handlebars template
      const compiledTemplate = handlebars.compile(templateContent);

      // Render the template with the variable data
      const renderedHTML = compiledTemplate(variableData);

      // Generate the PDF using Puppeteer
      const browser = await puppeteer.launch({ headless: "new" });
      const page = await browser.newPage();
      await page.setContent(renderedHTML);
      const pdfBuffer = await page.pdf();
      await browser.close();

      return pdfBuffer;
    } catch (error: any) {
      throw new Error(`Conversion failed: ${error.message}`);
    }
  }
}
