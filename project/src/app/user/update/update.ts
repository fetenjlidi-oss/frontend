import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update  implements OnInit{
  forms:FormGroup
  id:number=0
  showSuccessAlert=false
  idUser: number | undefined;
  constructor(private fb:FormBuilder , private userService:User ,  private router:ActivatedRoute){
    this.forms=this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],

    username: ['']
    })
  }
  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.id=Number(id)
      this.userService.getUserById(this.id).subscribe(data=>{
        console.log(data)
        this.forms.patchValue(data)
      })
      
    });
  }  
  onSubmit(){
    const firstName = this.forms.get('first_name')?.value || '';
const lastName = this.forms.get('last_name')?.value || '';
this.forms.get('username')?.setValue(`${firstName}${lastName}`.trim());
this.userService.updateUser(this.id,this.forms.value).subscribe (data=>{console.log(data)
this.showSuccessAlert=true
this.idUser=data.id}
) }
}
