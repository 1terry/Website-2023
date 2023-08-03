import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @ViewChild('card1') card1: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // $(".flip").click(function(){
  //   $(this).parents(".card").toggleClass("flipped");
  // });
  // $(".clickcard").click(function(){
  //   $(this).toggleClass("flipped");
  // });

  // flipCard(selected: ElementRef) {
  //   selected.nativeElement.parents(".card").toggleClass("flipped");
  // }

  // changeCard1(){
  //   this.flipCard(this.card1);
  // }

}
