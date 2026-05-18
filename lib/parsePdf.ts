import PDFParser from 'pdf2json';

export async function parsePdfBuffer(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const parser = new PDFParser();

    parser.on('pdfParser_dataReady', (data) => {
      const text = data.Pages.map((page) =>
        page.Texts.map((t) => decodeURIComponent(t.R[0]?.T ?? '')).join(' ')
      ).join('\n');
      resolve(text);
    });

    parser.on('pdfParser_dataError', (err) => {
      const msg = 'parserError' in err ? (err as { parserError: Error }).parserError.message : 'PDF parsing failed';
      reject(new Error(msg));
    });

    parser.parseBuffer(buffer);
  });
}
