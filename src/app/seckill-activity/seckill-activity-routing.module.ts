import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ActivityComponent} from './activity/activity.component';
import {ReceiveGiftComponent} from './receive-gift/receive-gift.component';
import {ReceiveSuccessComponent} from './receive-success/receive-success.component';
import {PaymentComponent} from './payment/payment.component';
import {WPaymentComponent} from './w-payment/w-payment.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component: IndexComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'wPayment', component: WPaymentComponent},
  {path: 'receive', component: ReceiveGiftComponent},
  {path: 'success', component: ReceiveSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeckillActivityRoutingModule {
}
