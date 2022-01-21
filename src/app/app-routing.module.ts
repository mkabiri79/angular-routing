import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './add-news/add-news.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: 'report/:id',
        component: ReportComponent,
      },
    ],
  },
  { path: 'addNews', component: AddNewsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
