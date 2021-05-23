import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from '../../services/githubservice.service';


@Component({
  selector: 'app-finduser',
  templateUrl: './finduser.component.html',
  styleUrls: ['./finduser.component.css']
})
export class FinduserComponent implements OnInit {

profile!: any;
/* repos!: any;
 */username!: string;

constructor(private githubService: GithubserviceService) { 

}

findProfile(){
 this.githubService.updateProfile(this.username);
 this.githubService.getProfileInfo().subscribe(profile => {

   this.profile = profile;
 });

/*  this.githubService.getProfileRepos().subscribe(repos => {

   this.repos = repos;
 })  	*/
}



ngOnInit(): void {
}

}

