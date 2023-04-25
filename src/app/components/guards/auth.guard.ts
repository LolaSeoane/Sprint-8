import { UsersService } from 'src/app/components/services/users.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:UsersService, private router:Router) {

  }
  canActivate():boolean{
    if(this.auth.loggedIn()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;

  }
}
