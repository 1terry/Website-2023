import { Component, OnInit, Directive, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('overview') overview: ElementRef;
  @ViewChild('about') about: ElementRef;
  // @ViewChild('experience') experience: ElementRef;
  @ViewChild('resume') resume: ElementRef;


  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  reset() {
    this.renderer.removeClass(this.overview.nativeElement, 'default');
    this.renderer.removeStyle(this.about.nativeElement, 'text-decoration');
    this.renderer.removeStyle(this.about.nativeElement, 'color');
    // this.renderer.removeStyle(this.experience.nativeElement, 'text-decoration');
    // this.renderer.removeStyle(this.experience.nativeElement, 'color');
    this.renderer.removeStyle(this.resume.nativeElement, 'text-decoration');
    this.renderer.removeStyle(this.resume.nativeElement, 'color');
    this.renderer.removeStyle(this.overview.nativeElement, 'text-decoration');
    this.renderer.removeStyle(this.overview.nativeElement, 'color');
  }

  changeUnderline(selected: ElementRef) {
    this.reset();
    this.renderer.setStyle(selected.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(selected.nativeElement, 'text-decoration-color', 'red');
    this.renderer.setStyle(selected.nativeElement, 'color', 'red');
  }

  toOverview() {
    console.log('overview');
    this.changeUnderline(this.overview);
  }

  toAbout() {
    console.log('About');
    this.changeUnderline(this.about);

  }

  toExperience() {
    console.log('Experience');
    // this.changeUnderline(this.experience);
  }
  toResume() {
    console.log('Resume');
    this.changeUnderline(this.resume);
  }
}
