import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {IndexService} from '../../service/index.service';
import {CarClassifyList, CarItemsList} from '../../entity/index';
import {flyIn} from '../../animationsVariable';
import {ActivatedRoute, Router} from '@angular/router';
import {SwalComponent} from '@toverux/ngsweetalert2';
import {Location} from '@angular/common';

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
  activeType: number;
  isComplete: boolean = false;
  @ViewChild('dialog') private swalDialog: SwalComponent;
  titleText: string = '全部分类';

  constructor(private title: Title,
              private indexService: IndexService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.title.setTitle('汽车服务');
    document.body.style.background = '#fff';
    this.getclassifyList();
    this.activatedRoute.queryParams.subscribe(res => {
      this.activeType = Number(res.activeType);
    });
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
  checkType(index: number, name: string): void {
    this.down = true;
    this.titleText = name;
    this.goodses = [];
    this.carClassifyList.forEach((value) => {
      value.check = false;
    });

    if (index === -1) { // 点击全部分类
      this.selectAll = true;
      this.carClassifyList.forEach((value) => {
        value.itemsList.forEach((item) => {
          if (item.activeType === this.activeType) {
            this.goodses.push(item);
          }
        });
      });
    } else { // 点击类型分类
      this.selectAll = false;
      this.carClassifyList[index].check = true;
      const itemsList = this.carClassifyList[index].itemsList;
      itemsList.forEach((item) => {
        if (item.activeType === this.activeType) {
          this.goodses.push(item);
        }
      });
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
        this.isHaveLoad = false;
        this.isComplete = true;
        this.carClassifyList = res;
        this.carClassifyList.forEach((value) => {
          value.itemsList.forEach((item) => {
            if (item.activeType === this.activeType) {
              this.goodses.push(item);
            }
          });
        });
      })
      .catch(res => {
        this.isHaveLoad = false;
        this.isComplete = true;
        console.log(res);
        this.setSwalDialogError('当前访问人数过多，请稍后再试！');
      });
  }

  /**
   * 购买商品
   */
  buyGoods(goods: CarItemsList): void {
    localStorage.setItem('automobileServiceGoods', JSON.stringify(goods));
    this.router.navigate(['/seckill/serviceDetails']);
  }


  /**
   * 弹框
   * @param title
   * @param text
   */
  setSwalDialogError(title: string): void {
    this.swalDialog.title = title;
    this.swalDialog.options = {
      'confirmButtonColor': '#50AFDF',
      'confirmButtonText': '确认'
    };
    this.swalDialog.show();
    this.swalDialog.confirm.subscribe(() => {
      this.location.back();
    });
    this.swalDialog.cancel.subscribe(() => {
      this.location.back();
    });
  }
}
