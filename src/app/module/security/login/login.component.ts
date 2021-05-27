import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SecurityService} from "../../service/security/security.service";
import {TokenStorageService} from "../../service/security/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  fieldTextType: boolean = false;
  roles: string[] = [];
  username: string;
  errorMessage: string;

  constructor(private formBuilder:FormBuilder,
              private securityService:SecurityService,
              private tokenStorageService:TokenStorageService,
              private router:Router)
  { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember_me: ['']
    });

    if (this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.securityService.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = this.tokenStorageService.getUser().username;
    }
  }

  submitForm(form: FormGroup) {
    console.log(form.value)
    this.securityService.login(form.value).subscribe(
      data => {
        if (form.value.remember_me) {
          this.tokenStorageService.saveTokenLocal(data.accessToken);
          this.tokenStorageService.saveUserLocal(data);
        } else {
          this.tokenStorageService.saveTokenSession(data.accessToken);
          this.tokenStorageService.saveUserLocal(data);
        }

        this.securityService.isLoggedIn = true;
        this.username = this.tokenStorageService.getUser().username;
        this.roles = this.tokenStorageService.getUser().roles;
        this.form.reset();
        this.router.navigateByUrl("index");

      },
      err => {
        this.errorMessage = err.error.message;
        this.securityService.isLoggedIn = false;
      }
    );
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
