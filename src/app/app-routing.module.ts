import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpFormComponent },
  { path: 'notify', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
