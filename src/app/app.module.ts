import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { FormsModule } from '@angular/forms';
import { StrikethroughDirective } from './strikethrough.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiaryDetailComponent,
    DiaryFormComponent,
    StrikethroughDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
