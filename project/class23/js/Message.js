!function () {
  var view = document.querySelector('section.message')

  var model = {
    init: function () {
      var APP_ID = 'x2mNAxSySqyYB6eEChMtu5T2-gzGzoHsz';
      var APP_KEY = 'vGSnGxuznp62DXHnKNOA6VTo';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    //获取数据
    fetch: function () {
      var query = new AV.Query('Message');
      return query.find() //Promise 对象
    },
    //保存数据
    save: function (name, content) {
      var Message = AV.Object.extend('Message');
      // 实例化Message
      var message = new Message();
      //将数据存入表中
      return message.save({ //Promise 对象
        //在'content'列中存入用户输入的数据
        'name': name,
        'content': content
      })
    }
  }
  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },

    loadMessages: function () {
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item) => item.attributes)
          array.forEach((item) => {
            let li = document.createElement('li')
            li.innerText = `${item.name}:${item.content}`
            this.messageList.appendChild(li)

          })
        })
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        //获取用户输入的内容 内容在 form > input[name=content]>value
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      //在数据库中创建一个名为Message的表
      this.model.save(name, content)
      .then(
        (object)=>{ //执行成功时，执行then的第一个函数
        //将用户的留言追加到页面中
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        this.messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = '';
        myForm.querySelector('input[name=name]').value = '';
      })
    }

  }
  controller.init.call(controller, view, model)
}.call()

