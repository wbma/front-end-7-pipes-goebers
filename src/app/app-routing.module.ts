import { UploadComponent } from './upload/upload.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FrontComponent } from './front/front.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'front',
    component: FrontComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
