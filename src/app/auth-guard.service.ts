// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
// import { SocialAuthService, SocialUser } from 'angularx-social-login';
// import { Observable, map, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService {

//   constructor(private router:Router, private socialAuthService: SocialAuthService) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     return this.socialAuthService.authState.pipe(
//       map((socialUser: SocialUser) => !!socialUser),
//       tap((isLoggedIn: boolean) => {
//         // if (!isLoggedIn) {
//         //   this.router.navigate(['signIn']);
//         // }
//       })
//     );
//   }
// }
