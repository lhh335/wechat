// components/bankPanel/bankPanel.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    bankName: {
      type: String
    },
    bankNO: {
      type: String
    },
    bankColor: {
      type: String
    }
  },

  data:{

  },
  methods: {
    _onTap () {
      this.triggerEvent('onTap');
    }
  }
})