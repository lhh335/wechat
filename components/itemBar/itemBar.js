Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    title:{
      type: String
    },
    value: {
      type:String
    },
    defaultValue: {
      type: String
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    // 弹窗显示控制
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  ready () {
    console.log('页面挂载参数', this);
  },
  pageLifetimes: {
    show () {
    }
  },
  methods: {
    onLoad () {
    },
    onTap (e) {
      console.log(e,'点击事件');
      this.triggerEvent('onTap');
    },
    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    _cancelEvent() {
      //触发取消回调
      /**
       * 相当于父级props的回调:this.triggerEvent相当于this.props。可以在父级的回调中做一些操作。
       */
      this.triggerEvent("cancelEvent")
      // this.hideDialog();
    },
    _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
      // this.hideDialog();
    }
  }
})