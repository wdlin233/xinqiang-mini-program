// pages/shop/shop.ts
Page({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      commodity:[{
        image:"https://wx1.sinaimg.cn/mw690/007dTwd5ly1hs446c4v26j30zk0zkn8w.jpg",
        title:"手工绘画",
        text:"已装裱。30元一幅，共12幅"
      },
      {
        image:"https://wx4.sinaimg.cn/mw690/007dTwd5ly1hs3orhur9nj31ai1ai48y.jpg",
        title:"手工帆布袋",
        text:"5元一个，共45个"
      },
      {
        image:"https://wx4.sinaimg.cn/mw690/007dTwd5ly1hs3or6edvyj30u00u0gph.jpg",
        title:"手工项链",
        text:"5元一个，共5个"
      },
      {
        image:"https://wx1.sinaimg.cn/mw690/007dTwd5ly1hs3or6el2uj3124124jvf.jpg",
        title:"软陶手链",
        text:"5元一个，共11个"
      },
      {
        image:"https://wx1.sinaimg.cn/mw690/007dTwd5ly1hs3or6ezxyj311p11p0vx.jpg",
        title:"串珠小熊",
        text:"30元一个，共1个"
      },
      {
        image:"https://wx2.sinaimg.cn/mw690/007dTwd5ly1hs3or6h4ioj314t14twkr.jpg",
        title:"手工香皂",
        text:"5元一个，共50个"
      },
      {
        image:"https://wx1.sinaimg.cn/mw690/007dTwd5ly1hs3or9cr1zj30zh0zh77h.jpg",
        title:"小手工皂礼盒",
        text:"5元一个，共5个"
      },
      {
        image:"https://wx1.sinaimg.cn/mw690/007dTwd5ly1hs3or9d7zhj312y12yaed.jpg",
        title:"手工皂礼盒",
        text:"内含6块。15元一个，共7个"
      },
      {
        image:"https://wx3.sinaimg.cn/mw690/007dTwd5ly1hs3or9ecs2j30u00u079r.jpg",
        title:"美人鱼笔筒",
        text:"30元一个，共1个"
      },
      {
        image:"https://wx1.sinaimg.cn/mw690/007dTwd5ly1hs3or9cxkwj30wa0waq4k.jpg",
        title:"香皂盲盒",
        text:"10元一个，共30个"
      },
      {
        image:"https://wx2.sinaimg.cn/mw690/007dTwd5ly1hs3or9dpbhj30u00u0jv7.jpg",
        title:"兔子笔筒",
        text:"15元一个，共1个"
      },
      {
        image:"https://wx2.sinaimg.cn/mw690/007dTwd5ly1hs3ordwy82j30ng0ngtck.jpg",
        title:"大手工皂礼盒",
        text:"内含4个大香皂。50元一个，共4个"
      }]
  },

  /**
   * 组件的方法列表
   */
  toUpload:function(){
    wx.showToast({
      title: '该接口已经关闭',
      icon: 'error',
      duration: 2000
    })
  },
  openOnlineShop:function(){
    wx.showToast({
      title: '该接口已经关闭',
      icon: 'error',
      duration: 2000
    })
  }
})