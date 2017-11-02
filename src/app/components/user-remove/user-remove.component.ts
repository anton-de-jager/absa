import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-remove',
  templateUrl: './user-remove.component.html',
  styleUrls: ['./user-remove.component.css']
})
export class UserRemoveComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  id:number = this.dataService.selectedItem.id;
  name:string = this.dataService.selectedItem.name;
  surname:string = this.dataService.selectedItem.surname;

  submit() {
    for (var i = 0; i < this.dataService.dataSource.length; i++) {
      if (this.dataService.dataSource[i].id == this.dataService.selectedItem.id){
        this.dataService.dataSource.splice(i, 1);
      }
    }
    return false;
  }
}
