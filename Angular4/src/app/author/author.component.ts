import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title:string = "List of Authors";
  authors;
  isActive = true;
  text : string = "List of Authors List of Authors List of Authors List of Authors List of Authors List of Authors List of Authors List of Authors List of Authors List of Authors List of Authors";
  constructor(private authorSvc: AuthorService) {
    this.authors = authorSvc.getAuthors();
   }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }
}
