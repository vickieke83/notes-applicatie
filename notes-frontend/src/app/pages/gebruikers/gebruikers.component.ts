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
      this.naam = "";

      this.ngOnInit();
    })
  }

  onUserSelect = (user: User) => {
    this.selectedUser = user;
  }

  deleteUser = (user: User) => {
    if (window.confirm("Ben je zeker dat je deze gebruiker wil verwijderen?")) {
      this.backendService.deleteUser(user.name).subscribe((result) => {
        console.log(result);
        // als success
        this.users.slice(this.users.indexOf(user), 1)

        this.ngOnInit();
      })
    }
  }
}
