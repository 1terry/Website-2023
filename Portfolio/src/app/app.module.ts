import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';
import { OverviewComponent } from './overview/overview.component';
import { MovingWavesComponent } from './moving-waves/moving-waves.component';
import { BubbleBackgroundComponent } from './bubble-background/bubble-background.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomepageComponent,
    ResumeComponent,
    OverviewComponent,
    MovingWavesComponent,
    BubbleBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
