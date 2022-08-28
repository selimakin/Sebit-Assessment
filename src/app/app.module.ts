import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryItemComponent } from './homepage/category-item/category-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PostItemComponent } from './post-item/post-item.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PostDetailPageComponent } from './post-detail-page/post-detail-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomepageComponent,
    CategoryItemComponent,
    CategoryPageComponent,
    PostItemComponent,
    BreadcrumbComponent,
    PostDetailPageComponent,
    SearchResultsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
