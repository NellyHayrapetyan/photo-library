import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Image } from '../models/Image';

@Injectable({ providedIn: 'root'})
export class ImagesService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getImages(page: number): Observable<Image[]> {
    return this.httpClient.get<any[]>(`https://picsum.photos/v2/list?page=${page}&limit=30`).pipe(
      map((data) => data.map((image) => ({ url: image['download_url'], id: image['id'] })))
    )
  }
}