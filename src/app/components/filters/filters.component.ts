import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Filters} from '../../pipes/filters';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() SendFilters = new EventEmitter<Filters>();

  filters = new FormGroup({
    brand: new FormControl(null),
    model: new FormControl(null),
    price: new FormControl(null),
    miles: new FormControl(null)
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  RectifyFilters(filters: Filters): Filters {
    const finalFilters: Filters = {};
    Object.keys(filters).forEach(key => {
      if (filters[key] !== null) {
        finalFilters[key] = filters[key];
      }
    });
    return finalFilters;
  }

  ApplyFilters(): void {
    const RectifiedFilters = this.RectifyFilters(this.filters.value);
    this.SendFilters.emit(RectifiedFilters);
  }

  ClearFilters(): void {
    this.filters.reset();
    this.SendFilters.emit(undefined);
  }

}

