import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  
  formGroup: FormGroup;
  post:any;
  name:string = '';
  surname:string = '';
  gender:string = '';
  friend:string = '';
  titleAlert:string = 'This field is required';
  genders = ['Male', 'Female'];
  friends = ['Johnny Walker', 'A.C. Kermans', 'Peter Parker', 'Anton de Jager'];
  friendControl: FormControl = new FormControl();
  
  filteredFriends: Observable<string[]>;
  
  constructor(private dataService:DataService, private formBuilder:FormBuilder) {
    this.formGroup = formBuilder.group({
      'name' : [null, Validators.compose([Validators.required])],
      'surname' : [null, Validators.compose([Validators.required])],
      'gender' : [null, Validators.compose([Validators.required])],
      'friend' : [null, null],
      'validate' : ''
    })
  }

  ngOnInit() {
    this.filteredFriends = this.friendControl.valueChanges
    .startWith(null)
    .map(val => val ? this.filter(val) : this.friends.slice());    
  }

  filter(val: string): string[] {
    return this.friends.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
 }

 submit(post) {
    this.dataService.dataSource.push(
      {
        id: Math.max.apply(Math,this.dataService.dataSource.map(function(o){return o.id;})) + 1, 
        name: post.name, 
        surname: post.surname, 
        gender: post.gender, 
        friend: post.friend !== undefined ? post.friend : '', 
      }
    );
    return false;
  }
}
