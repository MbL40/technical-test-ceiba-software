import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
    imports: [CommonModule, RouterModule, UsersRoutingModule, FormsModule],
})
export class UsersModule {
}
