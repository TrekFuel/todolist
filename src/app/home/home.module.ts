import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { TodoListEditorComponent } from './components/todo-list-editor/todo-list-editor.component';
import { TodoViewPage } from './pages/todo-view/todo-view.page';
import { TodoItemsListComponent } from './components/todo-items-list/todo-items-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        HomePage,
        TodoViewPage,
        TodoListEditorComponent,
        TodoItemsListComponent
    ],
    exports: [
        HomePage,
        TodoViewPage,
        TodoListEditorComponent,
        TodoItemsListComponent
    ]
})
export class HomePageModule {
}
