import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersService } from './create-user/shared/services/users/users.service';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  { path: 'list', component: ListUsersComponent },
  { path: 'create', component: CreateUserComponent },
  { path: '**', pathMatch: '**', redirectTo: '/users/list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsersService]
})
export class UsersRoutingModule {
}
