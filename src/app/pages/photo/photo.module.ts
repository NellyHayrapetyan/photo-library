import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({

  declarations: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([{
      path: '',
      component: PhotoComponent,
    }])
  ],
  providers: [],
  bootstrap: []
})
export class PhotoModule { }
