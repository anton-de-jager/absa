import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  dataSource = [
    {id: 1, name: 'Anton', surname: 'de Jager', gender: 'Male', friend: 'Peter Parker' },
    {id: 2, name: 'John', surname: 'Tager', gender: 'Male', friend: 'Johnny Walker' },
    {id: 3, name: 'Mark', surname: 'James', gender: 'Male', friend: 'A.C. Kermans' },
    {id: 4, name: 'James', surname: 'Woodridge', gender: 'Male', friend: 'Anton de Jager' },
    {id: 5, name: 'Peter', surname: 'Jennings', gender: 'Male', friend: 'Johnny Walker' },
    {id: 6, name: 'Adrian', surname: 'Vermaak', gender: 'Male', friend: '' },
    {id: 7, name: 'Lizel', surname: 'Whitely', gender: 'Male', friend: 'Peter Parker' },
    {id: 8, name: 'Anthony', surname: 'Porter', gender: 'Male', friend: 'A.C. Kermans' },
    {id: 9, name: 'Mary', surname: 'Magdalene', gender: 'Male', friend: 'Johnny Walker' },
    {id: 10, name: 'Susan', surname: 'Jennings', gender: 'Male', friend: 'Peter Parker' },
    {id: 11, name: 'Jannie', surname: 'Moolman', gender: 'Male', friend: 'Johnny Walker' },
    {id: 12, name: 'Piet', surname: 'Pompies', gender: 'Male', friend: 'Anton de Jager' },
    {id: 13, name: 'Phillip', surname: 'de Lange', gender: 'Male', friend: 'Johnny Walker' },
    {id: 14, name: 'Andrew', surname: 'Smith', gender: 'Male', friend: 'A.C. Kermans' },
    {id: 15, name: 'Sherwin', surname: 'Adams', gender: 'Male', friend: 'Peter Parker' }
  ];
  selectedItem:any;

  genders = ['Male', 'Female'];
  friends = ['Johnny Walker', 'A.C. Kermans', 'Peter Parker', 'Anton de Jager'];
}
