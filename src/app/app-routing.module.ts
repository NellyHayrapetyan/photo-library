import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { PhotoComponent } from './pages/photo/photo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full'
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'photos/:id',
    component: PhotoComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
