// pages/addPost/addPost.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title:'',
    description:''
  },

  /**
   * 组件的方法列表
   */
  methods:{
    onLoad:function(){
      wx.cloud.init({
        env:'oneenv-4gmmahzg0371ffae'
      });
      const db = wx.cloud.database({
        env:'oneenv-4gmmahzg0371ffae'
      });
      this.data.posts = db.collection('posts')
    },
    titleInput:function(e){
      this.setData({
          title:e.detail.value
      });
    },
    descriptionInput:function(e){
        this.setData({
          description:e.detail.value
        });
    },
    save:function(){
        if(this.data.title.length == 0 || this.data.description.length == 0){
            wx.showToast({
              title: '内容不能为空',
              icon:'error'
            });
            return;
        }
        this.data.posts.add({
            data:{
                title:this.data.title,
                description:this.data.description
            },
            success:res=>{
                wx.showToast({
                  title: '上传成功',
                })
                  setTimeout( () => {wx.navigateBack();}, 1000);
            }
        })
    }
  }
})