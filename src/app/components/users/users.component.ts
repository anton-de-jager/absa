import { Component, ViewChild, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  constructor(private dataService:DataService) {
    
  }

  displayedColumns = ['controls', 'name', 'surname', 'gender', 'friend'];
  exampleDatabase = new ExampleDatabase();
  dataSource: DataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    this.exampleDatabase.data.splice(0, this.exampleDatabase.data.length);

    for (var i = 0; i < this.dataService.dataSource.length; i++) {
      this.exampleDatabase.data.push(this.dataService.dataSource[i]);
    }
  }
  
    remove(item){
      this.dataService.selectedItem = item;
    }
    
      update(item){
        this.dataService.selectedItem = item;
      }
}

export interface UserData {
  id: number;
  name: string;
  surname: string;
  gender: string;
  friend: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    //this.data.push({id: 1, name: 'Anton', surname: 'de Jager', gender: 'Male', friend: 'Peter Parker' })
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}