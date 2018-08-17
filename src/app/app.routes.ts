import { Routes } from '@angular/router';
import { ShopfrontComponent } from './shopfront/shopfront.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
    { path: '', redirectTo: 'shopfront', pathMatch: 'full'},
    { path: 'shopfront', component: ShopfrontComponent},
    { path: 'summary', component: SummaryComponent}
]