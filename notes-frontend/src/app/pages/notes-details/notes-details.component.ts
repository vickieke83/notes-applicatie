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

  categorieArray: string[] = ["Spoed", "Dringend", "Niet dringend"];
  selectedCategorieIndex: number = 0;
  categorie = '';
  content = '';

  constructor(private route: ActivatedRoute, private _location: Location, private backendService: BackendService) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  onSelectChange = (event) => {
    this.selectedCategorieIndex = this.categorieArray.indexOf(event.target.value);
  }

  addContent = () => {
    console.log(this.categorieArray, this.selectedCategorieIndex, this.categorieArray[this.selectedCategorieIndex])
    this.route.params.subscribe(params => {
      this.backendService.addNote(params["gebruiker"], this.categorieArray[this.selectedCategorieIndex], this.content).subscribe((result) => {
        console.log(result);
        this.ngOnInit();
        window.location.href = "/notities/gebruikers/" + params["gebruiker"];
        //window.location.href = "/notes-applicatie/notities/gebruikers/" + params["gebruiker"];
      })
    })
  }
}
