import { Component } from '@angular/core';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { HeadersComponent } from './features/headers/headers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewsFeedComponent, HeadersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';
}
