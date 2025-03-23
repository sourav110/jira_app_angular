import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BoardComponent } from './pages/board/board.component';
import { TaskComponent } from './pages/task/task.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'board',
                component: BoardComponent
            },
            {
                path: 'task',
                component: TaskComponent
            },
        ]
    }
];
