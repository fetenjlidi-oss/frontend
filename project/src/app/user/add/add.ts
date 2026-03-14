import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.html',
  styleUrl: './add.css',

})
export class Add implements OnInit{
  forms:FormGroup
  showSuccessAlert: boolean=false;
  constructor(private fb:FormBuilder , private userService:User){
    this.forms=this.fb.group({
      first_name: [' first name', [Validators.required, Validators.minLength(3)]],
      last_name: ['last name', Validators.required],
      email: ['email@example.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required, Validators.minLength(6)]],
      role: ['admin', Validators.required],

            username: ['']
    })
  }
  ngOnInit(): void {
    this.showSuccessAlert=false
  }

onSubmit(){
const firstName = this.forms.get('first_name')?.value || '';
const lastName = this.forms.get('last_name')?.value || '';
this.forms.get('username')?.setValue(`${firstName}${lastName}`.trim());
  this.userService.AddUser(this.forms.value).subscribe(data=>{
    this.showSuccessAlert=true
    console.log(this.showSuccessAlert)
    console.log(data)
  })
}

}
