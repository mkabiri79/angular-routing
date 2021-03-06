import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { INews } from '../app-interface';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  report!: INews;
  isReportFound!: boolean;
  constructor(private newService: NewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.report = this.newService.news.find(
        (report) => report.id === +params['id']
      )!;
      if (!this.report) {
        this.isReportFound = false;
      } else this.isReportFound = true;
    });
  }
}
