import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const dashboardModule = () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
const plansModule = () => import('./modules/plans/plans.module').then(m => m.PlansModule)

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: dashboardModule },
            { path: 'plans', loadChildren: plansModule }
        ]
    },
    {
        path: '**', redirectTo: 'dashboard'
    }
];
