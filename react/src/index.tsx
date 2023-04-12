import * as React from 'react';
import { PiletApi } from 'webshop-shell';
import { ProductPage } from './ProductPage';
import products from './mock/products';

export function setup(app: PiletApi) {
  
  app.registerTile('Product', ({ piral }) => ( <ProductPage products={products} AddButton={({ item }) => <piral.Extension name="add-button" params={item} /> } /> ))
}
