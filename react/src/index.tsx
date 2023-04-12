import * as React from 'react';
import { PiletApi } from 'app-shell';
import { ProductPage } from './ProductPage';

export function setup(app: PiletApi) {
  const arrY = [
    {name: "Produce 1", price: 120, description: "Produce 1 Lorepem", image: "https://cdn.pixabay.com/photo/2021/10/15/01/57/women-6710736_960_720.jpg", product_id: "id-1"},
    {name: "Produce 2", price: 300, description: "Produce 2 Lorepem", image: "https://cdn.pixabay.com/photo/2019/07/15/13/44/building-4339428_960_720.jpg", product_id: "id-2"}
]
  app.registerTile('Product', ({ piral }) => ( <ProductPage productList={arrY} BuyButton={({ item }) => <piral.Extension name="buy-button" params={item} /> } /> ))
}