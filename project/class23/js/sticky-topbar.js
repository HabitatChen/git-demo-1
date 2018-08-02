!function () {
  var view = document.querySelector('#topNavBar')
  var controller = { //controller所有的属性是对view的操作
    view: null,
    init: function (view) {
      this.view = view //这里的this有调用时对象中的call的第一个参数
      this.bindEvents() // this.bindEvents.call(this)
    },
    bindEvents: function () {
      var view = this.view
      window.addEventListener('scroll',  (xx)=>{
        if (window.scrollY > 0) {
          this.active()
        } else {
          this.deactive()
        }
      }) 
      //箭头函数内外this不变，会往外找.
    },
    active:function(){
      this.view.classList.add('sticky')
    },
    deactive:function(){
      this.view.classList.remove('sticky')
    }
  }
  controller.init.call(controller, view)
  //controller.init.call(controller,view)
}.call()
