import { Injectable } from '@angular/core';
import { CategoryItem } from 'src/app/homepage/category-item/category-item.component';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }

  public getCategories() {
    return this.base.getReq<CategoryItem[]>('/categories');
  }

  public getCategory(id: number) {
    return this.base.getReq<CategoryItem>('/categories/' + id);
  }
}
