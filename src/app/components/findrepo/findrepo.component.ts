import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from '../../services/githubservice.service';


@Component({
  selector: 'app-findrepo',
  templateUrl: './findrepo.component.html',
  styleUrls: ['./findrepo.component.css']
})
export class FindrepoComponent implements OnInit {

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
