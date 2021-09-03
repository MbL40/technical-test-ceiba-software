import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  formCreateuser: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {
  }
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formCreateuser = this.formBuilder.group({
      name: ["", [Validators.required]],
      job: ["", [Validators.required,]]
    })
  }
  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

  public createUser() {
    this.redirectToListUsers();
    this.userService.createUser(this.formCreateuser.value).subscribe((response) => {
      alert('Se ha creado el usuario ' + response.name);
    })
  }

  get f() { return this.formCreateuser }
  get name() { return this.formCreateuser.get('name') }
  get job() { return this.formCreateuser.get('job') }

}
