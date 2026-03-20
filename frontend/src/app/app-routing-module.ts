import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { AuthGuard } from './services/guards/auth-guard';
import { BookForm } from './components/book-form/book-form';
import { StudentForm } from './components/student-form/student-form';
import { IssueForm } from './components/issue-form/issue-form';
import { BookComponent } from './components/book.component/book.component';
import { StudentComponent } from './components/student.component/student.component';
import { IsuueBookComponent } from './components/isuue-book.component/isuue-book.component';
import { ChangePassword } from './components/change-password/change-password';
import { AdminProfile } from './components/admin-profile/admin-profile';
import { AdminForm } from './components/admin-form/admin-form';

const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'book-form',
    component: BookForm,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'student-form',
    component: StudentForm,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'issue-form',
    component: IssueForm,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'book',
    component: BookComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'student',
    component: StudentComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'issue-book',
    component: IsuueBookComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'change-password',
    component: ChangePassword,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-profile',
    component: AdminProfile,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-form',
    component: AdminForm,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
