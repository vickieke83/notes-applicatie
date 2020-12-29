import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service'

type User = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.scss']
})
export class GebruikersComponent implements OnInit {
  
  title: string = 'Notitie Applicatie';
  users: User[];
  naam = '';
  selectedUser = null;
  //selectedUserNotes = []


  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getUsers().subscribe((data: User[])=>
    {
      console.log(data);
      this.users = data;
    });
  }

  addUser = () => {
    this.backendService.addUser(this.naam).subscribe((result) => {
      console.log(result);

      this.ngOnInit();
    })
  }

  onUserSelect = (user: User) => {
    this.selectedUser = user;
    //this.selectedUserNotes = this.getNotes(user);
  }

  deleteUser = (user: User) => {
    this.backendService.deleteUser(user.name).subscribe((result) => {
      console.log(result);
      // als success
      this.users.slice(this.users.indexOf(user), 1)

      this.ngOnInit();
    })
  }

  /*getNotes = (user: User) => {
    this.backendService.getNotes(user.name).subscribe((data: User[])=>
    {
       console.log(data);
       this.users = data;
    })
    return [
      {
        id: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userId: 5
      },
      {
        id: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userId: 5
      },
      {
        id: 3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userId: 5
      },
      {
        id: 4,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userId: 5
      }
    ]
  }*/


}
