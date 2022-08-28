import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from 'src/services/posts.service';
import { CategoriesService } from '../../services/categories.service';
import { CategoryItem } from '../homepage/category-item/category-item.component';
import { PostItem } from '../post-item/post-item.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit {
  categoryItemId!: number;
  categoryItem!: CategoryItem;
  postItems!: Array<PostItem>;
  list: string[] = ['Home Page'];

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => (this.categoryItemId = params['categoryId'])
    );

    this.categoriesService
      .getCategory(this.categoryItemId)
      .subscribe((categoryItem: CategoryItem) => {
        this.categoryItem = categoryItem;
        this.list.push(categoryItem['name']);
      });

    this.postsService
      .getPosts(this.categoryItemId)
      .subscribe((postItems: PostItem[]) => (this.postItems = postItems));
  }
}
