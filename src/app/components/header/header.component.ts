import { Component, OnInit } from '@angular/core'
import { stringifyQS } from '../../../utils/main'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.error(stringifyQS({ a: 1, b: 2 }))
  }
}
