import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './404/nopagefound.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
    { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    { path: '**', component: NopagefoundComponent },
];

@NgModule({
    declarations: [],
    imports: [ 
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }