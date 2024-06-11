import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  public cards: any = [];
  public selectedCard: any = null;
  public displayModal: boolean = false;
  public cardDetails: any = null;
  public loadingCards: boolean = true;
  public loadingDetails: boolean = false;

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.getInfoCards();
  }

  selectCard(card: any) {
    this.selectedCard = card;
    this.displayModal = true;
    this.loadingDetails = true;

    this.cardService.getCardDetails(card.ed_slug, card.slug).subscribe({
      next: (details) => {
        this.cardDetails = details;
      },
      complete: () => {
        this.loadingDetails = false;
      },
    });
  }

  private getInfoCards(): void {
    this.cardService.getCardsForEdition('espada-sagrada').subscribe({
      next: (resp: any) => {
        this.cards = resp.cards;
      },
      complete: () => {
        this.loadingCards = false;
      },
    });
  }
}
