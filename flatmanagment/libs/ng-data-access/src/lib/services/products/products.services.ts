
import { Injectable } from '@angular/core';
import {  ProductModel, ProductsConfig } from '@flatmanagment/ng-core';
import { LoggerUtil } from '@flatmanagment/ng-shared';


import { map, Observable } from 'rxjs';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService, private logger: LoggerUtil) { }

  getAllProducts(
  ): Observable<ProductModel[]> {

    const request = {
      searchType: 'Auto'
    };

    // if (searchLayerId) request.searchLayer = searchLayerId;

    return this.apiService
      .post(
        ProductsConfig.urls.getAllProducts,
        request
      )
      .pipe(
        map((data) => {
          this.logger.log("Products returned Success");
          return data;
        })
      );
  }
}
