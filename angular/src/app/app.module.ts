import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'piral-ng/common';
import { PageComponent } from './page.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [PageComponent, AppComponent],
  exports: [PageComponent, AppComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}