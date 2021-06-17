import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {faTag} from '@fortawesome/free-solid-svg-icons';
import {faTachometerAlt} from '@fortawesome/free-solid-svg-icons';
import {faCar} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import {CartDataService} from '../../services/cart-data.service';
import {AuthService} from '../../services/auth.service';

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

  isLogged = false

  constructor(public cart: CartDataService, private auth: AuthService) {
  }



  ngOnChanges(changes: SimpleChanges): void {
    this.auth.loggedObservable.subscribe(value => this.isLogged = value)
    this.page = 1;
  }

  ngOnInit(): void {
  }

  getPage(page: number): void {
    this.page = page;
  }
}
