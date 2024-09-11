// pages/chat/chat.ts
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
      posts:[{id:'23333', title:'开发者测试标题', des:'在老师的带领下，我们走进了馨翼康复中心的艺术活动室...', description:'在老师的带领下，我们走进了馨翼康复中心的艺术活动室，首先映入眼帘的就是满墙的涂鸦画作，随心所欲的控笔与天马行空的想象，让人恍惚间有一种“梵高+马蒂斯+毕加索”的错觉。这些折翼的天使才能重新安上翅膀，回到属于他们的艺术星球。'}]
  },

  /**
   * 组件的方法列表
   */
  addPost:function(){
    wx.navigateTo({
      url: '../addPost/addPost',
    })
  },
  // onLoad:function(){
  //   wx.cloud.init({
  //     env:'oneenv-4gmmahzg0371ffae'
  //   });
  //   const db = wx.cloud.database({
  //     env:'oneenv-4gmmahzg0371ffae'
  //   });
  //   this.data.posts = db.collection('posts')
  // },
  // onShow:function(){
  //   this.onLoad(); // auto-refresh, but not good
  //   this.data.posts.get({
  //       success:res=>{
  //         console.log("OK onShow Function");
  //           let dataArray = [];
  //           let oriData = res.data;
  //           oriData.forEach(element => {
  //               dataArray.push({
  //                   id:element._id,
  //                   title:element.title,
  //                   description:element.description,
  //                   des:element.description.slice(0,55)
  //               });
  //           });
  //           this.setData({
  //               posts:dataArray
  //           })
  //       }
  //   })
  // },
  tapItem:function(e){
      let index = e.currentTarget.dataset.index;
      wx.navigateTo({
        url: '../post/post?title='+this.data.posts[index].title+'&description='+this.data.posts[index].description,
      });
      console.log(this.data.posts[index])
  }
})