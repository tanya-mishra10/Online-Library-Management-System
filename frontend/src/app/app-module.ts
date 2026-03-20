import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { AuthInterceptor } from './services/auth-interceptor';
import { BookForm } from './components/book-form/book-form';
import { StudentForm } from './components/student-form/student-form';
import { IssueForm } from './components/issue-form/issue-form';
import { BookComponent } from './components/book.component/book.component';
import { StudentComponent } from './components/student.component/student.component';
import { IsuueBookComponent } from './components/isuue-book.component/isuue-book.component';
import { MatMenuModule } from '@angular/material/menu';
import { ChangePassword } from './components/change-password/change-password';
import { AdminProfile } from './components/admin-profile/admin-profile';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminForm } from './components/admin-form/admin-form';





@NgModule({
  declarations: [
    App,
    Home,
    Navbar,
    Login,
    Dashboard,
    BookForm,
    StudentForm,
    IssueForm,
    BookComponent,
    StudentComponent,
    IsuueBookComponent,
    ChangePassword,
    AdminProfile,
    AdminForm,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
