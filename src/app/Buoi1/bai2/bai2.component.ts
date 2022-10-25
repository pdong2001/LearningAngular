import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css'],
})
export class Bai2Component implements OnInit {
  constructor() {}

  public a = 0;
  public b = 0;
  public c = 0;
  public KQ = '';

  public PTBac2(x: number, y: number, z: number) {
    var delta = y * y - 4 * x * z;
    let x1;
    let x2;
    if (delta == 0) {
      x1 = -y / (2 * x);
      x2 = -y / (2 * x);
      this.KQ += `phuong trinh co nghiem kep: x1 = ${x1} - x2 = ${x2}`;
    } else if (delta < 0) {
      this.KQ = 'phuong trinh vo nghiem!';
    } else {
      x1 = (-y - Math.sqrt(delta)) / (2 * x);
      x2 = (-y + Math.sqrt(delta)) / (2 * x);
      this.KQ = `phuong trinh co hai nghiem: x1 = ${x1} - x2 = ${x2}`;
    }
  }

  public changes()
  {
    this.PTBac2(this.a, this.b, this.c);
  }

  ngOnInit(): void {}
}
