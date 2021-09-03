import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [LoginRoutingModule, ReactiveFormsModule, CommonModule],
})
export class LoginModule {
}
