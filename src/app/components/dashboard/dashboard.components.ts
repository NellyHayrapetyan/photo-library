import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isTabVisible = false;

  changeTabVisibilityMode() {
    this.isTabVisible = !this.isTabVisible;
  }
}
