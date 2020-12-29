import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { BackendService } from '../../backend.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  content = '';

  constructor(private route: ActivatedRoute, private _location: Location, private backendService: BackendService) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  addContent = () => {
    this.route.params.subscribe(params => {
      this.backendService.addNote(params["gebruiker"], this.content).subscribe((result) => {
        console.log(result);
        this.ngOnInit();
      })
    })
  }
}
