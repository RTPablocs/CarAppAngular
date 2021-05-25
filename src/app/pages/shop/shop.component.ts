import {Component, OnInit} from '@angular/core';
import {Filters} from '../../pipes/filters';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  content = [
    {id: 1, model: 'AAA', brand: 'DSDF', price: 10444},
    {id: 2, model: 'ASA', brand: 'DF'},
    {id: 3, model: 'AFA', brand: 'DDF'},
    {id: 4, model: 'AGA', brand: 'DASF'},
    {id: 1, model: 'AAA', brand: 'DSDF'},
    {id: 2, model: 'ASA', brand: 'DF'},
    {id: 3, model: 'AFA', brand: 'DDF'},
    {id: 4, model: 'AGA', brand: 'DASF'},
    {id: 1, model: 'AAA', brand: 'DSDF'},
    {id: 2, model: 'ASA', brand: 'DF'},
    {id: 3, model: 'AFA', brand: 'DDF'},
    {id: 4, model: 'AGA', brand: 'DASF'},
    {id: 1, model: 'AAA', brand: 'DSDF'},
    {id: 2, model: 'ASA', brand: 'DF'},
    {id: 3, model: 'AFA', brand: 'DDF'},
    {id: 4, model: 'AGA', brand: 'DASF'},
    {id: 1, model: 'AAA', brand: 'DSDF'},
    {id: 2, model: 'ASA', brand: 'DF'},
    {id: 3, model: 'AFA', brand: 'DDF'},
    {id: 4, model: 'AGA', brand: 'DASF'},
    {id: 1, model: 'AAA', brand: 'DSDF'},
    {id: 2, model: 'ASA', brand: 'DF'},
    {id: 3, model: 'AFA', brand: 'DDF'},
    {id: 4, model: 'AGA', brand: 'DASF'}
  ];
  search = '';
  filters = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  getCriteria(criteria: string): void {
    this.search = criteria;
  }

  getFilters(filtering: object): void {
    this.filters = filtering;
    console.log(this.filters);
  }
}
