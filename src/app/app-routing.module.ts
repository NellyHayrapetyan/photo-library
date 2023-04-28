import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full'
  },
  {
    path: 'photos',
    loadChildren: () => import('./pages/photos/photos.module').then(m => m.PhotosModule),
  },
  {
    path: 'photos/:id',
    loadChildren: () => import('./pages/photo/photo.module').then(m => m.PhotoModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesModule),

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
