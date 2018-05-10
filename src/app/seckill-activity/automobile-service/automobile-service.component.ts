import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {IndexService} from '../../service/index.service';
import {CarClassifyList, CarItemsList} from '../../entity/index';
import {flyIn} from '../../animationsVariable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-automobile-service',
  templateUrl: './automobile-service.component.html',
  styleUrls: ['./automobile-service.component.scss'],
  animations: [flyIn]
})
export class AutomobileServiceComponent implements OnInit {

  down: boolean = true;
  carClassifyList: CarClassifyList[];
  selectAll: boolean = true;
  goodses: any = [];
  isHaveLoad: boolean = false;

  constructor(private title: Title,
              private indexService: IndexService,
              private router: Router) {
  }

  ngOnInit() {
    this.title.setTitle('汽车服务');
    document.body.style.background = '#e0e0e0';
    this.getclassifyList();
  }

  /**
   * 修改按钮的方向
   */
  changeDown(): void {
    this.down = !this.down;
  }

  /**
   * 按类型显示商品
   * @param index
   */
  checkType(index: number): void {
    this.carClassifyList.forEach((value) => {
      value.check = false;
    });
    if (index === -1) {
      this.selectAll = true;
      this.goodses = [];
      this.carClassifyList.forEach((value) => {
        value.itemsList.forEach((item) => {
          this.goodses.push(item);
        });
      });
    } else {
      this.carClassifyList[index].check = true;
      this.selectAll = false;
      this.goodses = this.carClassifyList[index].itemsList;
    }
    console.log(this.goodses);
  }

  /**
   * 获取汽车养护类别 及其类别下的商品
   */
  getclassifyList(): void {
    this.isHaveLoad = true;
    this.indexService.getclassifyList()
      .then(res => {
        console.log(res);
        this.isHaveLoad = false;
        this.carClassifyList = res;
        this.carClassifyList.forEach((value) => {
          value.itemsList.forEach((item) => {
            this.goodses.push(item);
          });
        });
      })
      .catch(res => {
        this.isHaveLoad = false;
        console.log(res);
      });
  }

  /**
   * 购买商品
   */
  buyGoods(goods: CarItemsList): void {
    localStorage.setItem('automobileServiceGoods', JSON.stringify(goods));
    this.router.navigate(['/seckill/serviceDetails']);
  }
}
