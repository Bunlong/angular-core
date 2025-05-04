import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  imports: [CommonModule],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss'
})
export class CombineLatestComponent implements OnInit {
  combinedValues: [number, string][] = [];

  ngOnInit() {
    const observable1: Observable<number> = of(1, 2, 3, 4);
    const observable2: Observable<string> = of('A', 'B', 'C', 'D');

    const combinedObservable: Observable<[number, string]> = combineLatest(
      observable1,
      observable2
    );

    combinedObservable.subscribe((pair) => {
      this.combinedValues.push(pair);
    });
  }
}
