import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() Data: any;
  @Input() search: any;
  @Input() filters: any;
  page = 1;

  totalItems = () => {
    if (!this.search && !this.filters) {
      this.page = 1;
      return this.Data.length;
    } else if (this.search && !this.filters) {
      this.page = 1;
      return this.search.length;
    } else if (!this.search && this.filters) {
      this.page = 1;
      return this.filters.length;
    } else if (this.search && this.filters){
      this.page = 1;
      return this.filters.length;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  getPage(page: number): void {
    this.page = page;
  }
}
