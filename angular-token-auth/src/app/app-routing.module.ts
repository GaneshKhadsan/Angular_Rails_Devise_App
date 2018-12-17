import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentNewComponent } from './student/student-new.component';
import { StudentShowComponent } from './student/student-show.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  { 
    path: 'students/list',
    component: StudentListComponent 
  },
  { 
    path: 'students/new',
    component: StudentNewComponent 
  },
  { path: 'students/:id',
    component: StudentShowComponent 
  },
  { path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
