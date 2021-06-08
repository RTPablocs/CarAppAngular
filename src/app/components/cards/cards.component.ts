import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {faTag} from '@fortawesome/free-solid-svg-icons/faTag';
import {faTachometerAlt} from '@fortawesome/free-solid-svg-icons/faTachometerAlt';
import {faCar} from '@fortawesome/free-solid-svg-icons/faCar';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnChanges{

  faTag = faTag;
  faTachometerAlt = faTachometerAlt;
  faCar = faCar;
  faEye = faEye;

  @Input() Data: any;
  @Input() search: any;
  @Input() filters: any;
  page = 1;

  totalItems = () => {
    if (!this.search && !this.filters) {
      return this.Data.length;
    } else if (this.search && !this.filters) {
      return this.search.length;
    } else if (!this.search && this.filters) {
      return this.filters.length;
    } else if (this.search && this.filters) {
      return this.filters.length;
    }
  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.page = 1;
  }

  ngOnInit(): void {
  }

  getPage(page: number): void {
    this.page = page;
  }
}
