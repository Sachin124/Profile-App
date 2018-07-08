import {  Component } from '@angular/core';

  // Import the WebAPI Service//

import {  DataService } from './service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileData: any;
  followersData: any[];
  followingData: any[];
  repositoriesData: any[];
  displayedColumns: string[] = ['avatar_url', 'login'];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Call All Methods for fetching immidiatly data when page is loaded//
    this.getProfile();
    this.getFollowers();
    this.getFollowing();
    this.getRepositories();
  }

  // Getting The Profile Information data from the API//
  getProfile() {
    this.dataService.getProfile().subscribe(res => {
      this.profileData = res;      
    })    
  }

  // Getting The Follwoing data from the API//
  getFollowing() {
    this.dataService.getFollowing().subscribe(res => {
      this.followingData = res;
      console.log(this.followersData);
      
    })
  }

  // Getting The Followers data from the API//
  getFollowers() {
    this.dataService.getFollowers().subscribe(res => {
      this.followersData = res;   
    })  
  }  

  // Getting The Repositories data from the API//
  getRepositories() {
    this.dataService.getRepository().subscribe(res => {
      this.repositoriesData = res;
    })
  }

}
