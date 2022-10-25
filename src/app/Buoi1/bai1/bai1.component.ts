import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css'],
})
export class Bai1Component implements OnInit {
  public A = 0;
  public B = 0;
  public C = 0;
  constructor() {}

  ngOnInit(): void {}

  public Calculate(a: number, b: number, c: number) : void {
  //   if (!a)
  //   {
  //     return "Vô số nghiệm";
  //   }
  //   if (b)
  //   {
  //     var x = -c / a;
  //     return `X = ${x}`;
  //   }
  //   else
  }
}
