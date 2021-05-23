import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  private username:string;
  private clientid = 'f3571d8e55e169540825';
  private clientsecret = 'a6c2b7d8f7c691e771b1908873e1322028e097c4';

  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	this.username = 'Qibet88';
  }

  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
