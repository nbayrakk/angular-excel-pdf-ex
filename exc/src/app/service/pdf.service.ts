import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  downloadPdf() {
    const documentDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              ['Name', 'Department', 'Salary', 'Qauantity'],
              ['xxx', 'IT', '2000', '7'],
              ['yyy', 'HR', '2000', '2'],
            ],
          },
        },
      ],
    };

    pdfMake.createPdf(documentDefinition).download();
  }
}
