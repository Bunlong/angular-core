import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, of } from 'rxjs';
import { mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  imports: [CommonModule],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent implements OnInit {
  outputData: any = [];

  ngOnInit() {
      const observable = of(1, 2, 3, 4, 5);
      const square = (data: number) => of(data * data);

      this.outputData = observable.pipe(
        mergeMap((data) => {
          return square(data);
        }),
        toArray()
      );
  }
}
