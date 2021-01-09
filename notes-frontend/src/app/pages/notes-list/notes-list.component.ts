import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

type Note = {
  id: number;
  categorie: string;
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

  notes: Note[] = new Array<Note>();
  user: string;
  filteredNotes: Note[] = new Array<Note>();
  categorieArray: string[] = ["--", "Spoed", "Dringend", "Niet dringend"];
  selectedCategorieIndex: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user = params["gebruiker"];
      this.backendService.getNotes(params["gebruiker"]).subscribe(data => { this.notes = data; 
        console.log(data);
      this.filteredNotes = this.notes;
      })      
    })
  }

  deleteNote = (note: Note) => {
    if (window.confirm("Ben je zeker dat je deze notitie wil verwijderen?")) {
      this.backendService.deleteNote(note.id).subscribe((result) => {
        console.log(result);
        // als success
        this.notes.slice(this.notes.indexOf(note), 1)

        this.ngOnInit();
      })
    }
  }

  editNote(note: Note) {
    this.route.params.subscribe(params => {
      window.location.pathname = "/notities/gebruikers/" + params["gebruiker"] + "/notes/" + note.id + "/edit";
      //window.location.pathname = "/notes-applicatie/notities/gebruikers/" + params["gebruiker"] + "/notes/" + note.id + "/edit";
    })
  }


//Zoekfunctie
  filter(query: string) {
    query = query.toLowerCase().trim();

    let allResults: Note[] = new Array<Note>();
    //Woorden splitsen op basis van spatie
    let terms: string[] = query.split(' ');
    terms = this.removeDuplicates(terms);
    terms.forEach(term => {
      let results: Note[] = this.relevantNotes(term);
      allResults = [...allResults, ...results]
    });
    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;
  }

//functie binnen de zoekfunctie
  removeDuplicates(arr: Array<any>) : Array<any> {
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach(e => uniqueResults.add(e));

    return Array.from(uniqueResults);
  }

//functie binnen de zoekfunctie
  relevantNotes(query: string) : Array<Note> {
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => (
      note.content.toLowerCase().includes(query)
    ))
    return relevantNotes;
  }

//filteren op categorie
  onSelectChange = (event: any) => {
    this.selectedCategorieIndex = this.categorieArray.indexOf(event.target.value);
    
    if (this.selectedCategorieIndex == 0) 
    {
      this.filteredNotes = this.notes;
      return;
    }
    
    this.filteredNotes = this.notes.filter(note => {
      console.log(note.categorie, this.categorieArray[this.selectedCategorieIndex]);
      return note.categorie.includes(this.categorieArray[this.selectedCategorieIndex])
    })
  }
}
