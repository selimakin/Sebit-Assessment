import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { PostItem } from 'src/app/post-item/post-item.component';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends BaseService {
  allPosts: Array<PostItem> = [];
  filteredPosts = new BehaviorSubject<PostItem[]>([]);

  constructor(private base: BaseService) {
    super(base.http);
  }

  public getAllPosts() {
    return this.base
      .getReq<PostItem[]>('/posts')
      .pipe(map((posts) => this.sortPostsByDate(posts)))
      .subscribe((sortedPosts) => (this.allPosts = sortedPosts));
  }

  public getPosts(id: number) {
    return this.base
      .getReq<PostItem[]>('/posts?category_id=' + id)
      .pipe(map((posts) => this.sortPostsByDate(posts)));
  }

  public getPost(id: number) {
    return this.base.getReq<PostItem>('/posts/' + id);
  }

  private sortPostsByDate(posts: PostItem[]) {
    posts.sort((a: PostItem, b: PostItem) => {
      return +new Date(b.date) - +new Date(a.date);
    });
    return posts;
  }

  public filterPosts(filterKey: string) {
    const filteredPosts = this.allPosts.filter((post) => {
      return (
        post.title.includes(filterKey) || post.description.includes(filterKey)
      );
    });
    this.filteredPosts.next(filteredPosts);
  }
}
