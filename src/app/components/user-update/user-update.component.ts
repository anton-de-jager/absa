import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  
  formGroup: FormGroup;
  post:any;

  genders = this.dataService.genders;
  friends = this.dataService.friends;
  
  id:number;
  name:string;
  surname:string;
  gender:string;
  friend:string;

  titleAlert:string = 'This field is required';

  genderControl: FormControl = new FormControl();  
  friendControl: FormControl = new FormControl();  
  
  filteredFriends: Observable<string[]>;
  
  constructor(private dataService:DataService, private formBuilder:FormBuilder) {
    this.formGroup = formBuilder.group({
      'name' : [null, Validators.compose([Validators.required])],
      'surname' : [null, Validators.compose([Validators.required])],
      'gender' : [null, Validators.compose([Validators.required])],
      'friend' : [null, null],
      'validate' : ''
    });
  }

  ngOnInit() {
    this.filteredFriends = this.friendControl.valueChanges
    .startWith(null)
    .map(val => val ? this.filter(val) : this.friends.slice()); 

    this.id = this.dataService.selectedItem.id;
    this.name = this.dataService.selectedItem.name;
    this.surname = this.dataService.selectedItem.surname;
    this.gender = this.dataService.selectedItem.gender;
    this.friend = this.dataService.selectedItem.friend;

    this.formGroup.controls['name'].setValue(this.dataService.selectedItem.name);
    this.formGroup.controls['surname'].setValue(this.dataService.selectedItem.surname);
    this.formGroup.controls['gender'].setValue(this.dataService.selectedItem.gender);
    this.formGroup.controls['friend'].setValue(this.dataService.selectedItem.friend);
  }

  filter(val: string): string[] {
    return this.friends.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
 }

 submit(post) {
    for (var i = 0; i < this.dataService.dataSource.length; i++) {
      if (this.dataService.dataSource[i].id == this.dataService.selectedItem.id){
        this.dataService.dataSource[i] = post;
      }
    }
    return false;
  }
}