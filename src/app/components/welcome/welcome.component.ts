import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements OnInit {
  toggleThis: boolean;
  type:any;
  constructor(private router: Router) { }

  ngOnInit() {
    var userType = sessionStorage.getItem('type');
    if(userType =="user"){

      this.type="User";
      console.log(this.type);
    }
    else{
      this.type="Admin";
      console.log(this.type);
    }
    this.toggleThis = false;
  }
  toggle() {
    this.toggleThis = !this.toggleThis;

  }
  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/');
    window.location.reload(true);

  }

}
