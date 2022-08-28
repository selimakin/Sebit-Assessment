import { Component, Input, OnInit } from '@angular/core';

export interface PostItem {
  id: number;
  category_id: number;
  title: string;
  description: string;
  date: string;
  author: string;
}

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input() post!: PostItem;
  constructor() {}

  ngOnInit(): void {}
}
