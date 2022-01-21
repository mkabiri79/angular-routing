import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {}
  public onSubmit(form: NgForm) {
    const id = Math.round(Math.random() * 1000);
    this.newsService.postNews({
      id,
      ...form.value,
    });
    form.reset();
    this.router.navigate(['/news']);
  }
}
