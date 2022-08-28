import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/services/categories.service';
import { CategoryItem } from './category-item/category-item.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  categories!: Array<CategoryItem>;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
