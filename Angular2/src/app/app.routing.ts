import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DescriptionComponent } from './components/description/description.component';

const appRoutes: Routes = [
    { path: '', component: DescriptionComponent },
    { path: 'courses', component: ListCoursesComponent },
    { path: 'course/details/:tag', component: CourseDetailsComponent }
]

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);