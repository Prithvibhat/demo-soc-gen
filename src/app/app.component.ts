import { Component, NgZone } from '@angular/core';
//import { USER_DATA } from './data/mocks';
import { User } from './model/user';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users : User[];
  dangerUrl = "javascript:alert('Hello')";
  safeUrl : any;
  htmlSnippets = "Template <script>alert('Hello')</script>";
  increase(){
    this.dataService.counter++;
  }
  constructor(public dataService :DataService,
            public authService : AuthService,
            private sanitize : DomSanitizer,
            private zone : NgZone){
              this.zone.runOutsideAngular(()=>{
                //code1
                //code2
                this.zone.run(()=>{
                  //code2
                })
                //code3
              })
              this.safeUrl = this.sanitize.bypassSecurityTrustUrl(this.dangerUrl);
            }
  ngOnInit(){
    //this.users = USER_DATA;
    
    // this.users = this.dataService.getUserData();
    // this.dataService.getJsonData()
    //   .subscribe(
    //     data=>this.users=data,
    //     err=>console.log(err),
    //     ()=>console.log("COMPLETED"));
    firebase.initializeApp({
      apiKey: "AIzaSyDCsoL5_5lzp5vPh_SyjwWLSddscWOJVT0",
      authDomain: "fir-soc-gen.firebaseapp.com"
    });
    
    // this.dataService.getApiData()
    //   .subscribe(data=>this.users = data)
  }
}
