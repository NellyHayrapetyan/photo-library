import { NgModule } from '@angular/core';
import { FavoritesComponent } from './favorites.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  declarations: [
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: FavoritesComponent,
    }])
  ],
  providers: [],
  bootstrap: []
})
export class FavoritesModule { }
