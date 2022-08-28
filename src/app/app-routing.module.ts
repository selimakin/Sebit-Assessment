import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDetailPageComponent } from './post-detail-page/post-detail-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'category/:categoryId', component: CategoryPageComponent },
  {
    path: 'category/:categoryId/post/:postId',
    component: PostDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
