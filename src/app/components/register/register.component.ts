import { UsersService } from 'src/app/components/services/users.service';
import { Component,OnInit} from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interfeace';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  public registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: UsersService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.minLength(6),Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age:['', [Validators.required]],
    });
  }
  public onSubmit(): void {
    const user = this.registerForm.value
    console.log(user);
    
    this.authService.register(user).subscribe(
      res => {
        let token:string | any= Object.values(res);
        localStorage.setItem('token', token[0]);
     this.router.navigate(['/starships']);
      },err=>console.log(err)
    )
     
  }
 

}