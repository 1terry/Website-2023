import { Component, OnInit, Directive, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @ViewChild('JD') JD: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  // $('.card-trigger').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).closest('.card').addClass('card--flipped')
  // })

  // $('.card-close').on('click', function () {
  //   $(this).closest('.card').removeClass('card--flipped')
  // })

  cardTrigger(selected: ElementRef){
    selected.nativeElement.preventDefault;
    // this.renderer.removeClass(selected.nativeElement, 'card-front');
    this.renderer.addClass(selected.nativeElement, 'card--flipped');
    console.log('test');
    // selected.nativeElement.preventDefault();
    // selected.nativeElement.addClass('card--flipped');
  }

  changeCard1(){
    this.cardTrigger(this.JD);
  }

}
