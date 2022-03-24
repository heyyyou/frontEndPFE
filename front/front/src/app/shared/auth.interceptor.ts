import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//chaque requete http intercepté par token
//requete http associé par token
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      //clone http request plus add modification to the request cloned
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + accessToken)//key value
      });
      return next.handle(cloned);
    }
    else {
      //block middleware chain
      return next.handle(req)
    }
    throw new Error("Method not implemented.");
  }
}
