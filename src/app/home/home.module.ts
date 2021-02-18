import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { TodoListEditorComponent } from './components/todo-list-editor/todo-list-editor.component';

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
        TodoListEditorComponent
    ],
    exports: [
        HomePage,
        TodoListEditorComponent
    ]
})
export class HomePageModule {
}
