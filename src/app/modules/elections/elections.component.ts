import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.scss']
})
export class ElectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

onSubmit(form: NgForm){
  console.log(form);
}
}
