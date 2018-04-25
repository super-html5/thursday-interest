export const environment = {
  production: true,
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
