import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDetailPageComponent } from './post-detail-page/post-detail-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'category/:categoryId', component: CategoryPageComponent },
  {
    path: 'post/:postId',
    component: PostDetailPageComponent,
  },
  { path: 'results', component: SearchResultsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
