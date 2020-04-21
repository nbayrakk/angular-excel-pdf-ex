import { Component } from '@angular/core';
import { ExcelService } from './service/excel.service';
import { PdfService } from './service/pdf.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExcelService,PdfService]
})
export class AppComponent {
  title = 'exc';

  name = 'Angular';
  data: any = [
    {
      name: 'xxx',
      department: 'IT',
      salary: '2000',
    },
    {
      name: 'xxxx',
      department: 'IT',
      salary: '2000',
    },
    {
      name: 'xxxx',
      department: 'HR',
      salary: '2222',
    },
  ];

  constructor(private excelService: ExcelService,
              private pdfService:PdfService) {}

  downloadExcel() {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }

  downloadPdf() {
    this.pdfService.downloadPdf()
  }
}
