import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): any {
    return this.http.get('http://localhost:8051/products');
  }

  getSingleProduct(ProductUid: string): any {
    const url = 'http://localhost:8051/product/' + ProductUid;
    return this.http.get(url);
  }

}
