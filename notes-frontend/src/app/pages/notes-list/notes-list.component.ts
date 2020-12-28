import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

type Note = {
  id: number;
  content: string;
  userId: number;
}

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private backendService: BackendService) {}

  notes: Note[]

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.backendService.getNotes(params["gebruiker"]).subscribe(data => { this.notes = data; 
        console.log(data)
      })      
    })
  }

}
