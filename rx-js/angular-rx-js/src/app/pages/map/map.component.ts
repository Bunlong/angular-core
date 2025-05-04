import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  outputData: number[] = [];

  ngOnInit() {
    const observable = of(1, 2, 3, 4, 5);

    observable.pipe(
      map(data => data * 2)
    ).subscribe(data => {
      this.outputData.push(data); 
    });
  }
}
