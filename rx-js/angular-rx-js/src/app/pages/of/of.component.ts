import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  imports: [CommonModule],
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss'
})
export class OfComponent implements OnInit {
  outputData: number[] = [];

  ngOnInit() {
    const observable = of(1, 2, 3, 4, 5);
    observable.subscribe(data => {
      this.outputData.push(data); 
    });
  }
}
