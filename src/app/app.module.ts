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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
