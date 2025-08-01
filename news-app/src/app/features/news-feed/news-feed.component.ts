import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../core/news.service';

@Component({
  selector: 'app-news-feed',
  imports: [
    CommonModule,
  ],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent implements OnInit {
  // Property to store the API response.
  newsFeeds: any[] = [];
  // A flag to show a loading spinner while the news articles are being fetched.
  isLoading: boolean = true;

  //Injects the NewsService so we can call it to fetch data.
  constructor(private newsService: NewsService) { }

  // Lifecycle hook that runs after the component has been initialized.
  ngOnInit() {
    // Calls the getTopHeadlines method from NewsService to fetch news articles.
    this.newsService.getTopHeadlines().subscribe({
      next: (response) => {
        // Assigns the response data to the newsFeeds property.
        this.newsFeeds = response.articles;
        // Sets isLoading to false to hide the loading spinner.
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching news:', error);
        this.isLoading = false; // Hide spinner on error
      }
    });
  }

}
