import { PiletApi } from 'webshop-shell';
import Tile from './Tile.svelte';

import Page from './Page.svelte';

export function setup(app: PiletApi) {

  app.registerPage('/svelte', app.fromSvelte(Page, { cart: app.getData('cart') }))

  app.registerTile(app.fromSvelte(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}

