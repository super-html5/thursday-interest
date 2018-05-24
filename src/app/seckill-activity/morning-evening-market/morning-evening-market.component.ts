import {Component, OnInit} from '@angular/core';
import {flyIn} from '../../animationsVariable';

@Component({
  selector: 'app-morning-evening-market',
  templateUrl: './morning-evening-market.component.html',
  styleUrls: ['./morning-evening-market.component.scss'],
  animations: [flyIn]
})
export class MorningEveningMarketComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    document.body.style.background = '#231D4D';
  }

}
