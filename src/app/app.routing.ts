import { Routes, CanActivate  } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './modules/table/components/table/table.component';
export const AppRoutes: Routes = [
    {
        path: '',
        // redirectTo: 'login',
        pathMatch: 'full',
        component: TableComponent ,
    },
    {
        path: 'home',
        // redirectTo: 'login',
        pathMatch: 'full',
        component: HomeComponent ,
    },
]