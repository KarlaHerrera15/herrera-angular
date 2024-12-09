import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent implements OnInit{
  @Input() macchina: string = ""; 

  pezzi: string [];  
  constructor() { 
     this.pezzi = ['viti', 'ferro', 'gru']; 
  }
  ngOnInit() {
  }
}
