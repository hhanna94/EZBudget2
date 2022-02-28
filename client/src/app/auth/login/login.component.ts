import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  errorMsg:string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if (!form.valid) return;

    this.isLoading = true;
    this.authService.loginUser(form.value)
    .subscribe( res => {
      this.router.navigateByUrl("/budget");
    }, error => {
      this.errorMsg = "Invalid login attempt."
      this.isLoading = false;
    });
  }

}
