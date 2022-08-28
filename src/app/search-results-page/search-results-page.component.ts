import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from 'src/services/posts.service';
import { PostItem } from '../post-item/post-item.component';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css'],
})
export class SearchResultsPageComponent implements OnInit {
  filteredPosts: Array<PostItem> = [];
  filterKey!: string;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.filterKey = params['q'];
    });
    this.postsService.filteredPosts.subscribe((posts) => {
      this.filteredPosts = posts;
    });
  }
}
