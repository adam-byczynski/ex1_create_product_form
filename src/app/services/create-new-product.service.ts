import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDTOModel} from "../models/product-dto.model";

@Injectable()
export class CreateNewProductService {
  constructor(private _httpClient: HttpClient) {
  }

  createNewProduct(product: Omit<ProductDTOModel, 'id'>): Observable<ProductDTOModel>{
    return this._httpClient.post<ProductDTOModel>('https://fakestoreapi.com/products', product);
}
}
