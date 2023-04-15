import { AppModule } from './app/app.module';
import { PageComponent } from './app/page.component';
import { MenuComponent } from './app/menu.component';
import type { PiletApi } from 'webshop-shell';

export function setup(app: PiletApi) {
  app.defineNgModule(AppModule, {
    // remove the following if you actually want to enable zone.js
    ngZone: 'noop',
  });

  app.registerMenu(app.fromNg(MenuComponent));

  app.registerPage('/sample', app.fromNg(PageComponent));
}
