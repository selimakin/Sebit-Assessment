import { Component, Input, OnInit } from '@angular/core';

export interface CategoryItem {
  id: number;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css'],
})
export class CategoryItemComponent implements OnInit {
  @Input() categoryItem!: CategoryItem;

  constructor() {}

  ngOnInit(): void {}
}
