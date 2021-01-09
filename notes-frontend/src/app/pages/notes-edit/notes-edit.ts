import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { BackendService } from '../../backend.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.scss']
})
export class NotesEditComponent implements OnInit {

  categorieArray: string[] = ["Spoed", "Dringend", "Niet dringend"];
  selectedCategorieIndex: number = 0;
  content = '';

  constructor(private route: ActivatedRoute, private _location: Location, private backendService: BackendService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.backendService.getNotes(params["gebruiker"]).subscribe(
            data =>
            {
                let note = data.find(el => el.id == params["note"])
                this.selectedCategorieIndex = this.categorieArray.indexOf(note.categorie);
                this.content = note.content;
            }
        )
    })
  }

  backClicked() {
    this._location.back();
  }

  onSelectChange = (event) => {
    this.selectedCategorieIndex = this.categorieArray.indexOf(event.target.value);
  }

  save = () => {
      console.log(this.categorieArray, this.selectedCategorieIndex, this.categorieArray[this.selectedCategorieIndex])
      this.route.params.subscribe(params => {
        this.backendService.addNote(params["gebruiker"], this.categorieArray[this.selectedCategorieIndex], this.content).subscribe((result) => {
          console.log(result, params);
          
          this.backendService.deleteNote(+params["note"]).subscribe(() => window.location.href = "/notities/gebruikers/" + params["gebruiker"]);
          //this.backendService.deleteNote(+params["note"]).subscribe(() => window.location.href = "/notes-applicatie/notities/gebruikers/" + params["gebruiker"]);
        })
      })
    }
  }

  

