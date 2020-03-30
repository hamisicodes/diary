import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {
  newEntry = new Diary("","");

  @Output() addNewEntry = new EventEmitter<Diary>();
  addEntry(){
    this.addNewEntry.emit(this.newEntry);
    this.newEntry =  new Diary("","");

  }

  constructor() { }

  ngOnInit(): void {
  }

}
