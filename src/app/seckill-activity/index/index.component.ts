import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {flyIn} from '../../animationsVariable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [flyIn]
})
export class IndexComponent implements OnInit {

  isStart: boolean = true;
  startCountNumber: number = 0;

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('加油券秒杀');
    document.body.style.backgroundColor = '#fc7a3e';
    /**
     * 倒计时
     * @type {number}
     */
    // const now = new Date().getDay();
    // if (now < 4) {
    //   this.isStart = false;
    //   this.startCountNumber = 4 - now;
    // } else if (now > 4) {
    //   this.isStart = false;
    //   this.startCountNumber = 7 - (now - 4);
    // } else {
    //   this.isStart = true;
    // }
  }

  banImg(event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
