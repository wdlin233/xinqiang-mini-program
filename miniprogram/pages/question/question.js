// pages/question/question.js
Component({
  data: {
    questions: [
      { text: "1.不易于别人混在一起玩"},
      { text: "2.听而不闻，像是聋子"},
      { text: "3.教他学什么，他强烈反对，如拒绝模仿说话或动作"},
      { text: "4.如不顾危险"},
      { text: "5.不能接受日常习惯的变化"},
      { text: "6.以手势表达需要"},
      { text: "7.莫名其妙的笑"},
      { text: "8.不喜欢被人拥抱"},
      { text: "9.不停地动，坐不住，活动量过大"},
      { text: "10.不望对方的脸，避免实线接触"},
      { text: "11.过度偏爱某些物品"},
      { text: "12.喜欢旋转的东西"},
      { text: "13.反复怪异的动作或玩耍"},
      { text: "14.对周围漠不关心"}
    ],
    answers: [],
    totalScore: 0
  },
  methods:{
  onLoad: function() {
    // 初始化答案数组
    const questions = this.data.questions;
    const answers = questions.map(() => 'never'); // 默认答案为 'no'
    this.setData({ answers });
  },

  onAnswerChange: function(e) {
    const index = e.currentTarget.dataset.index;
    const answers = this.data.answers;
    answers[index] = e.detail.value; // 更新答案
    this.setData({ answers });
  },

  onSubmit: function(e) {
    const answers = this.data.answers;
    this.setData({
      totalScore: answers.reduce((sum, answer, index) => {
        return sum + (answer === 'never' ? 0 : (answer === 'seldom' ? 1 : 2));
      }, 0)
    });
  }
}
});