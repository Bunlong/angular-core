import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  imports: [CommonModule],
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss'
})
export class FromComponent implements OnInit {
  outputData: number[] = [];

  ngOnInit() {
    const observable = from([10, 20, 30, 40, 50]);
    observable.subscribe(data => {
      this.outputData.push(data); 
    });
  }
}
