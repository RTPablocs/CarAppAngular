import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() searchCriteria = new EventEmitter<string>();
  faSearch = faSearch;
  searchWord = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  searchArgument(): any{
    this.searchCriteria.emit(this.searchWord);
  }
}
