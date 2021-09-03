import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/shared/services/login/login.service';
import { LoginComponent } from './login/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '@shared/interceptor/interceptor.service';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { HomeUserComponent } from './users/home-user/home-user.component';
import { NavBarComponent } from './users/nav-bar/nav-bar.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';


@NgModule({
  declarations: [
    LoginComponent,
    ListUsersComponent,
    HomeUserComponent,
    NavBarComponent,
    CreateUserComponent,
    FilterUserByNamePipe
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    }
  ]
})
export class FeatureModule { }
