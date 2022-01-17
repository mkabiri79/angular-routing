import { Component, OnInit } from '@angular/core';

import { INews } from '../app-interface';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news!: INews[];
  constructor(private newsService: NewsService) {}
  activeId!: number;
  ngOnInit(): void {
    this.news = this.newsService.news;
  }
}
