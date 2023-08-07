import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],


})


export class CardsComponent implements OnInit {
   @ViewChild('card1') card1: ElementRef;
   @ViewChild('card2') card2: ElementRef;
   @ViewChild('card3') card3: ElementRef;
 
  constructor() { }

  ngOnInit(): void {
    
  }

  flipCard(selected: ElementRef){
    selected.nativeElement.classList.toggle('is-flipped');
  }

  flipCard1(){
    this.flipCard(this.card1);
  }

  flipCard2(){
    this.flipCard(this.card2);
  }

  flipCard3(){
    this.flipCard(this.card3);
  }

}
