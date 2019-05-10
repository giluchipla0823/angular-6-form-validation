import { RouterModule, Routes } from '@angular/router';

import {
    HomeComponent,
    ReactiveFormComponent,
    TemplateDrivenComponent
} from './app.index';

const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'template-driven', component: TemplateDrivenComponent},
    {path: '**', component: HomeComponent}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash:false});