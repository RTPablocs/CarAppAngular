import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() searchCriteria = new EventEmitter<string>();
  faTimes = faTimes;
  searchWord = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  searchArgument(): any{
    this.searchCriteria.emit(this.searchWord);
  }
  clearSearch(): void {
    this.searchWord = '';
    this.searchCriteria.emit(this.searchWord);
  }
}
