import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {PhotosListComponent} from './photos-list/photos-list.component';

@NgModule({
  declarations: [
    PhotosListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    PhotosListComponent
  ]
})
export class SharedModule { }
