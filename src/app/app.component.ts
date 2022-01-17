import { Component } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle, faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faPlusCircle = faPlusCircle;
  faHome = faHome;
  faNewspaper = faNewspaper;
}
