import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { ViewTodosComponent } from './components/view-todos/view-todos.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "view-todo", component: ViewTodosComponent },
  { path: "edit-todo", component: EditTodoComponent },
  { path: "new-todo", component: CreateTodoComponent },
  { path: "edit-todo/:id", component: EditTodoComponent },
  { path: "user-management", component: UserPanelComponent },
  { path: "", component: LoginComponent },
  { path: "*", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
