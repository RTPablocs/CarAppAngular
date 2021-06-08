import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId: any;
  product: any;
  public slides = [
    {src: '../assets/images/det1.jpg'},
    {src: '../assets/images/det1.jpg'},
    {src: '../assets/images/det1.jpg'},
  ];

  constructor(private route: ActivatedRoute, private http: HttpService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params.productId;
    });
    this.http.getSingleProduct(this.productId).subscribe((data: { result: any }) => {
      this.product = data.result;
    })
    ;
  }

}
