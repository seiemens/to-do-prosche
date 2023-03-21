import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewTodosComponent } from './components/view-todos/view-todos.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "view-todo", component: ViewTodosComponent },
  { path: "edit-todo", component: EditTodoComponent },
  { path: "new-todo", component: CreateTodoComponent },
  { path: "edit-user/:id", component: EditUserComponent},
  { path: "edit-todo/:id", component: EditTodoComponent },
  { path: "admin-panel", component: AdminPanelComponent},
  { path: "", component: LoginComponent },
  { path: "*", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
