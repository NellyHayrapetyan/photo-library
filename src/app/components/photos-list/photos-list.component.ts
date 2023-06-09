import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from '../../models/Image';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent {
  @Input() public images: Image[] | null = [];
  @Input() public isLoading?: boolean;
  @Input() public imageActionText?: string;
  @Output() onImageSelected = new EventEmitter();

  selectImage(image: Image): void {
    this.onImageSelected.emit(image);
  }
}
