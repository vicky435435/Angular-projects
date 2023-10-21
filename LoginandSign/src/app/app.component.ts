import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginandSign';

  signupUser: any[]=[];
  signUpObj:any ={
    userName: '',
    email: '',
   password: ''
 };

 loginObj: any = {
  userName: '',
  password: ''
 }
  constructor(){

  }

  ngOnInit(): void {

    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUser = JSON.parse(localData);
    }
  }

  OnSignUp(){
   this.signupUser.push(this.signUpObj);
   localStorage.setItem('signUpUser',JSON.stringify(this.signupUser));
   this.signUpObj = {
    userName: '',
    email: '',
   password: ''
   };
  }

  OnLogin(){
     const isUserExist = this.signupUser.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
     if (isUserExist != undefined) {
      alert('user Login Successfully')
     }
     else {
      alert ('Wrong login and password')
     }
  }




}
