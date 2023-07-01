import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() token = false;
  showHeader = false;
  showLogin = true;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, 
    private route: ActivatedRoute, private snackBar: MatSnackBar, private userService: UserService) { }

  ngOnInit(): void {
    this.showHeader = this.route.snapshot.data['showHeader'];
  }

  loginForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", Validators.required]
  })

  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required]]
  })

  login() {
    console.log(this.loginForm.value);
    const inputEmail = this.loginForm.value.email;
    const inputPassword = this.loginForm.value.password;

    const user = this.auth.userData.find((userData) => userData.email === inputEmail && userData.password === inputPassword);

    if (user) {
      this.auth.token = true;
      this.auth.login();
      //this.userService.setLoggedInUser(user);
      this.router.navigate(['home']);
      console.log(this.auth.token);
    } else {
      alert("invalid login")
    }
  }

  signup() {
    const newUser: User = {
      name: this.signupForm.controls.name.value || '',
      email: this.signupForm.controls.email.value || '',
      password: this.signupForm.controls.password.value || '',
      confirmPassword: this.signupForm.controls.confirmPassword.value || ''
    }

    this.auth.userData.push(newUser);
    console.log(this.auth.userData);
    this.snackBar.open(this.signupForm.controls.name.value + ", you are a member now. Pleases Login now", '', { duration: 2000 });
    this.signupForm.reset();
  }

  changeLoginSignup() {
    this.showLogin = !this.showLogin;
  }

  uniqueEmailValidator(): Validators {
    const errorMsg = "error msf";
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email = control.value;
      const isEmailUnique = this.auth.userData.every(item => item.email !== email);
      return isEmailUnique ? null : { errorMsg };
    };
  }
  passwordsMatch(): boolean {
    const password = this.signupForm.controls.password.value;
    const confirmPassword = this.signupForm.controls.confirmPassword.value;
    return password === confirmPassword;
  }
}
