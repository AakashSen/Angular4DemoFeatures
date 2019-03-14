import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {

  year : Number;
  month : Number;
  constructor(private route: Router ,private routes:ActivatedRoute) { }

  ngOnInit() {
    let params = this.routes.snapshot.paramMap; 
    this.year =  +params.get('year');
    this.month =  +params.get('month');
  }

  viewAll(){
    this.route.navigate(['']);
  }

}
