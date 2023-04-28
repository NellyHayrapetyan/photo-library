import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ImagesService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getImages(page: number): Observable<string[]> {
    return this.httpClient.get<any[]>(`https://picsum.photos/v2/list?page=${page}&limit=30`).pipe(
      map((data) => data.map((image) => image['download_url']))
    )
  }
}