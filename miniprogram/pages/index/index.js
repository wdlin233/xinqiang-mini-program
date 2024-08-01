// pages/index/index.ts
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

  },

  /**
   * 组件的方法列表
   */
    openURL:function(url){
      wx.openOfficialAccountArticle({
        url:url
      })
      // wx.navigateTo({url:"../logs/logs"})
    },
    navigateToArticle:function(){
      wx.navigateTo({url:"../article/article"})
    },
    navigateToIntro:function(){
      wx.navigateTo({url:"../intro/intro"})
    },
    navigateToMistake:function(){
      wx.navigateTo({
        url: "../mistake/mistake",
      })
    },
    navigateToQuestion:function(){
      wx.navigateTo({
        url: "../question/question",
      })
    }
  })