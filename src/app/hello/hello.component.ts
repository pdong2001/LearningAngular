import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit(): void {
  }

  public xinChao()
  {
    alert(`Xin chào ${this.name}`);
  }

}
