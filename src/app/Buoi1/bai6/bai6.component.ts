import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.css'],
})
export class Bai6Component implements OnInit {
  public n: number = 0;
  public fibs!: number[];
  constructor() {}

  ngOnInit(): void {}

  public tinh() {
    this.fibs = [];
    if (this.n > 1) this.fibs.push(1, 1);
    var currentFib = 1;
    var lastFib = 1;
    do {
      currentFib += lastFib;
      lastFib = currentFib - lastFib;
      if (currentFib < this.n) this.fibs.push(currentFib);
    } while (currentFib < this.n);
  }
}
