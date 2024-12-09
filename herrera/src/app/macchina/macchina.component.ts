import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent implements OnInit{
  @Input() macchina: string = ""; 

  constructor() {
  }

  ngOnInit() {}

}
