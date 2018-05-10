import {Component, OnInit} from '@angular/core';
import {flyIn} from '../../animationsVariable';
import {CarItemsList, AddCarOrder} from '../../entity/index';
import {IndexService} from '../../service/index.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-car-payment',
  templateUrl: './car-payment.component.html',
  styleUrls: ['./car-payment.component.scss'],
  animations: [flyIn]
})
export class CarPaymentComponent implements OnInit {
  img1: string = './assets/images/xuan.png';
  img2: string = './assets/images/unxuan.jpg';
  value: number = 106;
  disabled: boolean = false;
  isHaveLoad: boolean = false;
  btnText: string = '确认支付';
  goods: CarItemsList;
  paramsData: any;
  ua = window.navigator.userAgent.toLowerCase();
  reg = /MicroMessenger/i;


  constructor(private indexService: IndexService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.goods = JSON.parse(localStorage.getItem('automobileServiceGoods'));
    console.log(this.goods);
    this.activatedRoute.params.subscribe(res => {
      console.log(res);
      this.paramsData = res;
    });
  }

  /**
   * 汽车养护 下单
   */
  addCarOrder(): void {
    this.disabled = true;
    this.isHaveLoad = true;
    this.btnText = '请稍后';
    const paramsData = this.paramsData;
    this.indexService.addCarOrder(paramsData.sellerId, this.goods.id, paramsData.reserveTime, paramsData.reserveMobile)
    // this.indexService.addCarOrder('2', '10', '2018-05-08 12:30:00', '18729904064')
      .then(res => {
        console.log(res);
        this.judgeCarOrderd(res.orderSerial);
      })
      .catch(res => {
        console.log(res);
        this.disabled = false;
        this.isHaveLoad = false;
        this.btnText = '确认支付';
      });
  }

  judgeCarOrderd(orderSerial: string): void {
    this.indexService.judgeCarOrderd(orderSerial)
      .then(res => {
        console.log(res);
        this.goPayment(orderSerial, this.value);
      })
      .catch(res => {
        console.log(res);
        this.disabled = false;
        this.isHaveLoad = false;
        this.btnText = '确认支付';
      });
  }

  /**
   * 跳确认支付
   * @param orderNumber
   * @param bankCode
   */
  goPayment(orderNumber: string, bankCode: number) {
    const frontEndUrl = `https://mobile.sxwinstar.net/ccb/ccbSuccess/ccbSuccess.php`;
    const paymentUrl = 'https://mobile.sxwinstar.net/wechat/payment/ccbPay.html';
    const paymentType = '1';
    let subBankCode;
    if (bankCode === 991) {
      if (this.reg.test(this.ua)) {
        subBankCode = 201;
        console.log(subBankCode);
      } else {
        subBankCode = 202;
        console.log(subBankCode);
      }
    } else if (bankCode === 992) {
      subBankCode = 301;
      console.log(subBankCode);
    }
    location.href = `${paymentUrl}?bankCode=${bankCode}&frontEndUrl=${frontEndUrl}&orderNumber=${orderNumber}` +
      `&paymentType=${paymentType}&subBankCode=${subBankCode}`;
  }

  /**
   * 修改选中图片
   */
  changeImg1(): void {
    this.value = 106;
    this.img1 = './assets/images/xuan.png';
    this.img2 = './assets/images/unxuan.jpg';
  }

  changeImg2(): void {
    this.value = 991;
    this.img2 = './assets/images/xuan.png';
    this.img1 = './assets/images/unxuan.jpg';
  }
}
