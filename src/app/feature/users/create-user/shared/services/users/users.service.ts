import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListUser } from '@core/interface/list-user';
import { UserCreate } from '@core/interface/user-create';
import { UserData } from '@core/interface/user-data';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<ListUser> {
    return this.http.get<ListUser>(`${environment.endPointListUser}`).pipe(
      map((response) => response as ListUser));
  }

  createUser(user: UserCreate): Observable<UserCreate> {
    return this.http.post<UserCreate>(`${environment.endPointUser}`, user);
  }

  deleteUserForIndex(index: number): Observable<UserData> {
    return this.http.delete<UserData>(`${environment.endPointUser}${index}`)
  }
}
