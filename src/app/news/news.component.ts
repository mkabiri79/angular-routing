import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { INews } from '../app-interface';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  mobileNav: boolean = false;
  news!: INews[];
  constructor(private newsService: NewsService) {}
  activeId!: number;
  ngOnInit(): void {
    this.news = this.newsService.news;
  }
  public toggleNav() {
    this.mobileNav = !this.mobileNav;
  }
}
