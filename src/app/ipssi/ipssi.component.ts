import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipssi',
  template: '<h2>{{ name }}</h2>',
  styles: ['h2 { color: green; }']
})
export class IpssiComponent implements OnInit {
  name: string = 'Chuck Norris le maitre du Kung fu!!';
  constructor() { }

  ngOnInit() {
  }

}
