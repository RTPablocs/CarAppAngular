import {Component, Input} from '@angular/core';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() slides: any;
  initialSlide = 0;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor() {
  }

  rightClick(): void {
    const nextSlide = this.initialSlide + 1;
    this.initialSlide = nextSlide === this.slides.length ? 0 : nextSlide;
  }

  leftClick(): void {
    const prevSlide = this.initialSlide - 1;
    this.initialSlide = prevSlide < 0 ? this.initialSlide : prevSlide;
  }
}
