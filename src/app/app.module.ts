import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.components';
import { ImagesService } from './services/images.service';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PageNotFoundComponent,
    DashboardComponent,
    PhotosListComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
