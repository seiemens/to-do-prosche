import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewTodosComponent } from './components/view-todos/view-todos.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    LoginComponent,
    AdminPanelComponent,
    SignupComponent,
    ViewTodosComponent,
    UserPanelComponent,
    CreateTodoComponent,
    EditTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ...environment.providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
