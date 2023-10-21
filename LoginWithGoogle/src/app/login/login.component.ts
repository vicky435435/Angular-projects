import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user!:SocialUser;

  constructor(private socialAuthService: SocialAuthService){

  }

  ngOnInit(): void{
    this.socialAuthService.authState.subscribe((user)=>{
      this.user = user;
    })
  }

  loginWithGoogle(): any{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): any{
    this.socialAuthService.signOut();
  }
}
