import '@angular/compiler'
import * as React from "react";
import { Link } from "react-router-dom";
import { PiletApi } from "webshop-shell";
import { PageComponent } from './app/page.component';

import { AppModule } from './app/app.module';

export function setup(app: PiletApi) {
  app.defineNgModule(AppModule, {
    // remove the following if you actually want to enable zone.js
    ngZone: 'noop',
  });

  app.registerPage("/sample", app.fromNg(PageComponent));

  app.registerMenu(() => <Link to="/sample">Sample</Link>);
}