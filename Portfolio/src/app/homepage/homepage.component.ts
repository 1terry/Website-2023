import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) {
  }

  ngOnInit(): void {

  }
}



