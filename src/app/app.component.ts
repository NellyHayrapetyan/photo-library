import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photo-library';
  isTabVisible = false;

  changeTabVisibilityMode() {
    this.isTabVisible = !this.isTabVisible;
  }
}
