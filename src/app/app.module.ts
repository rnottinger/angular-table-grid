import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularTableGridModule} from '../../projects/angular-table-grid/src/lib/angular-table-grid.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AngularTableGridModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
