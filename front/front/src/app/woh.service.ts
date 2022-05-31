import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { from, Observable } from "rxjs";
import { mergeMap, tap } from 'rxjs/operators';

//chaque requete http intercepté par token
//requete http associé par token
//helps us to modify the HTTP Request by intercepting it before the Request is sent to the back end
//we did it because chaque requete doit etre authorized
//send token from browser to server by interceptor
// yjib token mn back yhotu f local storage baed ujibu m local storage w yhotu al ay requete besh tmchi ll back :)
// @Injectable({ providedIn: 'root' })
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private storage: Storage) { }
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log(this.storage.get('token'));
//     console.log(req.url)
//     const accessToken = this.storage.get('token');
//     // console.log(localStorage.getItem("accessToken"));
//     if (accessToken) {
//       //clone http request plus add modification to the request cloned
//       const cloned = req.clone({
//         setHeaders: { Authorization: this.storage.get('token') }//key value
//       });
//       return next.handle(cloned);
//     }
//     else {
//       //block middleware chain
//       return next.handle(req)
//     }
//     throw new Error("Method not implemented.");
//   }
// }
