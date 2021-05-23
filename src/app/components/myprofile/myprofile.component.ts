import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from 'src/app/services/githubservice.service';
import {User} from '../../classes/user'



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
   profile!: any;
   repos!: any;
   username!: string;

  constructor(private githubService: GithubserviceService) { 

  }

  findProfile(){
  	this.githubService.updateProfile(this.username);
  	this.githubService.getProfileInfo().subscribe(profile => {
  
  		this.profile = profile;
  	});

  	this.githubService.getProfileRepos().subscribe(repos => {
 
  		this.repos = repos;
  	})  	
  }



  ngOnInit(): void {
  }

}
