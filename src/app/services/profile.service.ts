import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// This service fetches random user profiles & friends profiles from the RandomUser API
export class ProfileService {
  // URL of the RandomUser API
  private apiUrl = 'https://randomuser.me/api/';

  constructor (private http: HttpClient) { }

  // Fetch a random profile using the RandomUser API
  getRandomUser() {
    return this.http.get(this.apiUrl);
  }

  // Fetch Friends profiles using the RandomUser API
  getFriendsProfileUser(){
    return this.http.get(this.apiUrl + '?results=5');
  }
}
