import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  filterKey: string = '';

  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    this.filterKey = form.value.searchInput;
    this.postsService.filterPosts(form.value.searchInput);
    this.router.navigate(['/results'], { queryParams: { q: this.filterKey } });
  }
}
