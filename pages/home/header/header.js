// pages/home/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap:function(){
      this.triggerEvent('myEvent',{name:'li'})
    },
  },
  // 组件生命周期
  lifetimes:{
    attached(){
      console.log('组件被加入到页面节点树')
    },
    detached(){
      console.log('组件从页面节点树中被移除')
    }
  },
  // 组件在页面的生命周期
  pageLifetimes:{
    show(){},
    hide(){},
    resize(){}
  }
})
