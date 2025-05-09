import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const dashboardModule = () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
const plansModule = () => import('./modules/plans/plans.module').then(m => m.PlansModule)
const chatModule = () => import('./modules/chat/chat.module').then(m => m.ChatModule)

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: dashboardModule },
            { path: 'plans', loadChildren: plansModule },
            { path: 'chat', loadChildren: chatModule }
        ]
    },
    {
        path: '**', redirectTo: 'dashboard'
    }
];
