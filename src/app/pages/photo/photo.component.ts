import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  public image?: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    if (history.state && history.state.data) {
      this.image = history.state.data;
    }
  }

  removeImage(): void {
    localStorage.removeItem(this.route.snapshot.params['id']);
    this.router.navigate(['../..', 'favorites']);
  }
}
