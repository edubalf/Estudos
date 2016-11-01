import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { HeadBarComponent } from './components/shared/head-bar/head-bar.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { HomePage } from './pages/home-page/home-page';
import { DescriptionComponent } from './components/description/description.component';


@NgModule({
  declarations: [
    HeadBarComponent,
    CourseDetailsComponent,
    ListCoursesComponent,
    HomePage,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [HomePage]
})
export class AppModule { }
