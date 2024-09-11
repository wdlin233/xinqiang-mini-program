// pages/article/article.ts
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
    articles:[
        {image:"https://wx4.sinaimg.cn/mw690/007dTwd5ly1hs3oqtuptwj30e60dvn2k.jpg",
        reference:"https://mp.weixin.qq.com/s/oofNz-slZJHkvbbh0I0AgA", 
        title:"【心翼翩翩|仲夏起航】 心蔷实践团心翼小队集结完毕",
        text:"心蔷·心翼的团队成员介绍推文"},
        {image:"https://wx3.sinaimg.cn/mw690/007dTwd5ly1hs3oqttk5vj30s60qpn4m.jpg",
        reference:"https://mp.weixin.qq.com/s/L1NwkJ0fvoNYQ0jkRIf79A", 
        title:"伴星光共舞 | 一起守护来自星星的孩子",
        text:"北京启蕊康复中心师生与北京科技大学心蔷心翼实践团的融合活动"},
        {image:"https://wx1.sinaimg.cn/mw690/007dTwd5ly1hs3oqtxdqij30pj0mgai2.jpg",
        reference:"https://mp.weixin.qq.com/s/fxTFP2e7Eji6AsY6sMnuYQ", 
        title:"伴星光共舞 | 夏日微风起，关爱意蕴浓",
        text:"心蔷心翼实践团兵分两路，前往永爱康复中心与馨翼康复中心"},
        {image:"https://wx2.sinaimg.cn/mw690/007dTwd5ly1hs5a5oxcl8j30p70mmjwt.jpg",
        reference:"https://mp.weixin.qq.com/s/VkmRC96JRcyiTRf9xd7vKw", 
        title:"伴星光共舞 | 凝聚一份爱，点亮一颗星",
        text:"心蔷心翼实践团于小关奥林匹克文化广场进行的第一次爱心义卖活动"}
    ]
  },

  /**
   * 组件的方法列表
   */
    openURL:function(e){
      let url = e.currentTarget.dataset.url
      wx.openOfficialAccountArticle({
        url:url
      })
    }
})