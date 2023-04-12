import { lazy } from 'solid-js';
import type { PiletApi } from 'webshop-shell';

import Page from './Page';

export function setup(app: PiletApi) {
  app.registerMenu(app.fromSolid(() => <a href="/sample">Sample</a>));
  app.registerPage('/sample', app.fromSolid(Page));
}
