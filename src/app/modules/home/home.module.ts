import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddIntensComponent } from './components/todo-input-add-intens/todo-input-add-intens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
//pages
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddIntensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HomeModule { }
