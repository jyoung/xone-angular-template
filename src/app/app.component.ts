import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Template';

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px`);
  private titleService: Title;

  constructor(titleService: Title) {
    this.titleService = titleService;
  }

  ngOnInit(): void {
    this.titleService.setTitle(`X1 - ${this.title}`);
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
