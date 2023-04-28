import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent {
  @Input() public images: string[] | null = [];
  @Input() public imageActionText?: string;
  @Output() onImageSelected = new EventEmitter();

  selectImage(image: string) {
    this.onImageSelected.emit(image);
  }
}
