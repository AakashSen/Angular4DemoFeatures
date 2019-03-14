import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { Followers } from './followers';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private service: FollowersService) { }

  followers : Followers[];

  ngOnInit() {
    this.service.getFollowers().subscribe(response => this.followers = response);
  }

}
