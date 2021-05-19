import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public slides = [
    {src: '../assets/images/ultrawide-Ford-GT-car-1880127.jpg'},
    {src: '../assets/images/red-ferrari-5120x1440.jpg'},
    {src: '../assets/images/121-1215642_big.jpg'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
