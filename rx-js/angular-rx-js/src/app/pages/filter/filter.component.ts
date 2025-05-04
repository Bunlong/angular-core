import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  outputData: number[] = [];

  ngOnInit() {
    const observable = of(1, 2, 3, 4, 5, 11, 13, 17, 19, 0, 5, 7);

    observable.pipe(
      filter(data => data > 7)
    ).subscribe(data => {
      this.outputData.push(data);
    });
  }
}
