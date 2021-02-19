import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { TodoViewPage } from './pages/todo-view/todo-view.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'todo-items-view',
        component: TodoViewPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule {
}
