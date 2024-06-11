import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  getCardsForEdition(edition?: string): Observable<any> {
    return this.http.get(
      `https://api.myl.cl/cards/edition/${edition ? edition : undefined}`
    );
  }

  getCardDetails(edition: string, slug: string): Observable<any> {
    return this.http.get<any>(
      `https://api.myl.cl/cards/profile/${edition}/${slug}`
    );
  }
}
