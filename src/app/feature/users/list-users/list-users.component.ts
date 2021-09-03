import { Component, OnInit } from '@angular/core';
import { ListUser } from '@core/interface/list-user';
import { UserData } from '@core/interface/user-data';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';
import { UsersService } from '../create-user/shared/services/users/users.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  dataUser: UserData;
  filterByName = "";

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.getUsersService();
  }



  private getUsersService() {
    this.userService.getUsers().subscribe(users => {
      this.dataUser = users.data;
    })
  }
  public deleteUser(id, user: UserData) {
    this.userService.deleteUserForIndex(id).subscribe(() =>
      alert(`Se ha eliminado a ` + user.first_name)
    )
  }
}
