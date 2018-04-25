// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,


  /**
   * 获取油券列表
   */
  moneyUrl: '/ccb-api/api/v1/cbc/goods/query',

  /**
   * 添加订单
   */
  addOilOrderUrl: '/ccb-api/api/v1/cbc/SecKillOrders',

  /**
   * 支付订单
   */
  payOrderdUrl: '/ccb-api/api/v1/cashier/payOrder',

  /**
   * 发送认证信息卡验证码
   */
  sendAuthMsg: `/ccb-api/api/v1/cbc/auth/sendAuthMsg`,

  /**
   * 验证并保存信息卡
   */
  authMsgUrl: `/ccb-api/api/v1/cbc/auth/authMsg`,

  /**
   * 查询是否绑定信息卡
   */
  checkIsAuthUrl: `/ccb-api/api/v1/cbc/auth/checkIsAuth`,
  /**
   * 获取tokenId
   */
  getTokenUrl: `/ccb-api/api/v1/cbc/account/getToken`,

  /**
   * 汽车养护券
   */
  receiveVoucher: `/ccb-api/api/v1/cbc/SecKillOrders/giveCareCoupons`,
};
