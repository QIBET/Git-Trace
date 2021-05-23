import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  private username:string;
  private clientid = '';
  private clientsecret = '';

  constructor(private http:HttpClient) { 
  	
  	this.username = 'Qibet88';
  }

  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_i=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
