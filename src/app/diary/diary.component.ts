import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  myDiary:Diary[] = [
    new Diary("Go shopping","Shopping is fun.I will wake up very early in the morning"),
    
  ];

  addAnotherEntry(quote){
    this.myDiary.push(quote);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
