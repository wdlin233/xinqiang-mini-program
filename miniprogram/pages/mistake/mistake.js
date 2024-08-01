// pages/mistake/mistake.js
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
    infos:[{
        title:"1.孤独症和自闭症一样吗?",
        content:"是 (正确率: 9.02%)",
        isShow:false
    },{
      title:"2.自闭症患者属于残疾人吗?",
      content:"是 (正确率: 39.22%)",
      isShow:false
    },
    {
      title:"3.自闭症是精神病吗?",
      content:"否 (正确率: 45.88%)",
      isShow:false
    },
    {
      title:"4.自闭症的产生和基因、后天养育不当，精神状态失常都有关吗?",
      content:"只和基因有关，是先天性的 (正确率5.88%)",
      isShow:false
    },
    {
      title:"5.自闭症患者喜欢一个人呆着，交流欲望不大?",
      content:"否 (正确率: 12.94%)",
      isShow:false
    },
    {
      title:"6.孤独症的两大核心障碍是?",
      content:"语言障碍 和 社交沟通障碍 (正确率: 4.33%)，智力障碍与重复刻板行为不在此列",
      isShow:false
    },
    {
      title:"7.孤独症患者中，智商方面低于普通人群的比例大概为?",
      content:"80% (正确率: 20.39%)",
      isShow:false
    }
  ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle:function(e) {
      let isShow = e.currentTarget.dataset.isShow;
      let index = e.currentTarget.dataset.index;
      this.setData({['infos[' + index + '].isShow']: !isShow});
      console.log(this.data.infos)
    }
  }
})