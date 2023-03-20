import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import StateService from './services/StateService/state.service';
import { EditUserComponent } from './components/edit-user/edit-user.component';

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
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    StoreModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    StoreModule.forRoot({}, {}),
    

  ],
  providers: [
    ...environment.providers,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
