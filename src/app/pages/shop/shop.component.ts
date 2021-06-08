import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {
  content!: any;
  search = '';
  filters = {};

  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
    this.http.getAllProducts()
      .subscribe((data: { result: any; }) => {
        this.content = data.result;
      });
  }

  getCriteria(criteria: string): void {
    this.search = criteria;
  }

  getFilters(filtering: object): void {
    this.filters = filtering;
    console.log(this.filters);
  }

  ngOnDestroy(): void {
  }
}
