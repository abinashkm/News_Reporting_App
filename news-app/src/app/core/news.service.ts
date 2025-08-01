import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2';
  private apiKey = environment.newsApiKey;

  constructor(private http: HttpClient) { }
  
    getTopHeadlines(country: string = 'us'): Observable<any> {
    const url = `${this.apiUrl}/top-headlines?country=${country}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
