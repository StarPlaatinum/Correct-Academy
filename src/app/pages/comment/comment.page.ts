import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  constructor() { }
  openLink1(){
    window.open('https://www.linkedin.com/in/eduardo-lazaro-8857141bb/');
  }
  openLink2(){
    window.open('');
  }
  openLink3(){
    window.open('');
  }
  openGit1(){
    window.open('https://github.com/Eduardo-Lazaro');
  }
  openGit2(){
    window.open('');
  }
  openGit3(){
    window.open('');
  }
  openIns1(){
    window.open('https://www.instagram.com/eduardo.lazaro.666/');
  }
  openIns2(){
    window.open('');
  }
  openIns3(){
    window.open('');
  }
  ngOnInit() {
  }

}
