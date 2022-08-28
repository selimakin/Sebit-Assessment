import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from 'src/services/posts.service';
import { PostItem } from '../post-item/post-item.component';

@Component({
  selector: 'app-post-detail-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.css'],
})
export class PostDetailPageComponent implements OnInit {
  postItem!: PostItem;
  postItemId!: number;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => (this.postItemId = params['postId'])
    );
    this.postsService
      .getPost(this.postItemId)
      .subscribe((postItem: PostItem) => (this.postItem = postItem));
  }
}
