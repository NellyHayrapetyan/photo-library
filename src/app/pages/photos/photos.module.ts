import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { SharedModule } from '../../components/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ImagesService } from '../../services/images.service';

@NgModule({
  declarations: [
    PhotosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSnackBarModule,
    RouterModule.forChild([{
      path: '',
      component: PhotosComponent,
    }])
  ],
  providers: [ImagesService],
  bootstrap: []
})
export class PhotosModule { }
