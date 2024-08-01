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
      posts:[]
  },

  /**
   * 组件的方法列表
   */
  addPost:function(){
    wx.navigateTo({
      url: '../addPost/addPost',
    })
  },
  onLoad:function(){
    wx.cloud.init({
      env:'oneenv-4gmmahzg0371ffae'
    });
    const db = wx.cloud.database({
      env:'oneenv-4gmmahzg0371ffae'
    });
    this.data.posts = db.collection('posts')
  },
  onShow:function(){
    this.onLoad(); // auto-refresh, but not good
    this.data.posts.get({
        success:res=>{
          console.log("OK onShow Function");
            let dataArray = [];
            let oriData = res.data;
            oriData.forEach(element => {
                dataArray.push({
                    id:element._id,
                    title:element.title,
                    description:element.description,
                    des:element.description.slice(0,55)
                });
            });
            this.setData({
                posts:dataArray
            })
        }
    })
  },
  tapItem:function(e){
      let index = e.currentTarget.dataset.index;
      wx.navigateTo({
        url: '../post/post?title='+this.data.posts[index].title+'&description='+this.data.posts[index].description+'&id='+this.data.posts[index].id,
      });
      console.log(this.data.posts[index])
  }
})