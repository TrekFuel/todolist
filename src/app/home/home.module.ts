import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { TodoListComponent } from './components/todo-list/todo-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NbIconModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    TodoListComponent
  ],
  exports: [
    HomePage,
    TodoListComponent
  ]
})
export class HomePageModule {
}
