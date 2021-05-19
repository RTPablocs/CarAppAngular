import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  content = [
    {id: 1, name: 'AAA', brand: 'DSDF'},
    {id: 1, name: 'ASA', brand: 'DF'},
    {id: 1, name: 'AFA', brand: 'DDF'},
    {id: 1, name: 'AGA', brand: 'DASF'}
  ];
  search = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getCriteria(criteria: string): any {
    this.search = criteria;
  }

}
