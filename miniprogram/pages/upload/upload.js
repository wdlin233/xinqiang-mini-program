// pages/upload/upload.js
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
    phone:'',
    demand:'',
    tipa: '义卖的一切收益将转交至机构及家长们手中，用于特殊教育相关事业。',
    tipb:"若您担心您的隐私问题，可以点此处跳转至我们的电商平台。"
  },

  /**
   * 组件的方法列表
   */
  methods:{
    onLoad:function(){
      wx.cloud.init({
        env:'YOUR ENVID'
      });
      const db = wx.cloud.database({
        env:'YOUR ENVID'
      });
      this.data.info = db.collection('info')
    },
    phoneInput:function(e){
      this.setData({
          phone:e.detail.value
      });
    },
    demandInput:function(e){
        this.setData({
          demand:e.detail.value
        });
    },
    nameInput:function(e){
      this.setData({
          name:e.detail.value
      });
    },
    addressInput:function(e){
      this.setData({
          address:e.detail.value
      });
    },
    save:function(){
        if(this.data.phone.length == 0 || this.data.demand.length == 0){
            wx.showToast({
              title: '内容不能为空',
              icon:'error'
            });
            return;
        }
        this.data.info.add({
            data:{
                phone:this.data.phone,
                demand:this.data.demand,
                name:this.data.name,
                address:this.data.address
            },
            success:res=>{
                wx.showToast({
                  title: '上传成功',
                })
                  setTimeout( () => {wx.navigateBack();}, 1000);
            }
        })
    },
    openOnlineShop:function(){
      wx.openOfficialAccountArticle({
        url: 'https://mp.weixin.qq.com/s/rEY6GnoTmBBImgotMSd3YA',
      })
    }
  }
})