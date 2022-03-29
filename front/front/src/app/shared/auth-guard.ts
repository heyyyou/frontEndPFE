import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user.service";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token') != null)
      return true;
    this.router.navigate(['/login'])
    return false;
  }

}


