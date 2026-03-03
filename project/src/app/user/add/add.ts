import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.html',
  styleUrl: './add.css',

})
export class Add {
  forms:FormGroup
  constructor(private fb:FormBuilder , private userService:User){
    this.forms=this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],

            username: ['']
    })
  }

onSubmit(){
const firstName = this.forms.get('first_name')?.value || '';
const lastName = this.forms.get('last_name')?.value || '';
this.forms.get('username')?.setValue(`${firstName}${lastName}`.trim());
  this.userService.AddUser(this.forms.value).subscribe(data=>{
    console.log(data)
  })
}

}
