// pages/post/post.js
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
      title: '',
      description: '',
      id: '',
      contentInputText: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onLoad:function(option){
          this.setData({
              id:option.id,
              title:option.title,
              description:option.description
          });
          wx.cloud.init({
            env:'YOUR ENVID'
          });
          const db = wx.cloud.database({
            env:'YOUR ENVID'
          });
          const _ = db.command;
          this.data.comments = db.collection('comments');
      },
      onShow:function(){
        const db = wx.cloud.database({
          env:'YOUR ENVID'
        });
        const _ = db.command;
        this.data.comments = db.collection('comments'); // necessary
        this.data.comments.where({postId:_.eq(this.data.id)}).get({
            success:res=>{
              console.log("OK onShow Function in Comments");
              console.log(res);
                let dataArray = [];
                let oriData = res.data;
                oriData.forEach(element => {
                    dataArray.push({
                        id:element._id,
                        content: element.content
                        // postId: element.postId
                    });
                });
                this.setData({
                    comments:dataArray
                });
                console.log(dataArray);
                console.log(comments);
            }
        })
      },
      contentInput:function(e){
        this.setData({
            contentInputText:e.detail.value
        });
      },
      save:function(){
        const db = wx.cloud.database({
          env:'YOUR ENVID'
        });
        this.data.comments = db.collection('comments')
        if(this.data.contentInputText.length == 0){
            wx.showToast({
              title: '内容不能为空',
              icon:'error'
            });
            return;
        }
        this.data.comments.add({
            data:{
                postId:this.data.id,
                content:this.data.contentInputText
            },
            success:res=>{
                wx.showToast({
                  title: '上传成功',
                })
                //setTimeout( () => {wx.navigateBack();}, 1000);
                this.setData({
                  contentInput:''
                });
                this.onShow();
            }
        })
      }
  }
})