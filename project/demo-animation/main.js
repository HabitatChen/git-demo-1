//把code写到#code和style标签里
function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  var n = 0
  var id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    console.log('一轮结束')
    if (n >= code.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 1)
}

function wirteMarkdown(markdown, fn) {
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  var id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n);
    domPaper.scrollTop = domPaper.scrollHeight
    console.log('一轮结束')
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 1)
}

var result = `/*
* 面试官你好，我是xxx
* 我将以动画的形式来介绍我自己
* 只用文字介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/

*{
  transition:all 1s
}

html{
  background:rgba(222,222,222);
  font-size:16px;
}

#code{
  border: 1px solid red;
  padding:16px;
}

/*我需要一点代码高亮*/

.token.selector {
  color: #690;
}
.token.property{
  color: #905;
}
.token.function{
  color: #DD4A68;
}

/*加点3D效果*/
#code{
  transform: rotate(360deg)
}
/*不玩了，我来介绍一下我自己吧*/
/*我需要一张白纸*/
#code{
  position:fixed;
  left:0;
  width:50%;
  height:100%;
}
#paper{
  position:fixed;
  right:0;
  width:50%;
  height:100%;
  background:#ddd;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:16px ;
}
#paper > .content{
  background:white;
  width:75%; 
  height:100%;
}
`
var result2 = `
#paper{

}`
/**
 * 接下来把markdown 变成HTML 
 */
var md = `
#标题 自我介绍

我叫XXX
1996年2月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍

熟悉 JavaScripte

# 项目介绍

1.xxx 轮播
2.xxx 简历
3.xxx 画板

#联系方式

QQ 87083672
Email habitatchen#163.com
手机 15809222222
`
//为什么writeCode是异步任务，
//而createPaper是同步任务
writeCode('', result, () => { //writeCode call the function
  createPaper(() => {
    writeCode(result, result2,()=>{
      wirteMarkdown(md)
    })
  })
}) //定闹钟：50毫秒之后开始写第一行代码

//1.定闹钟
//2.wtiteCode返回
//3.执行fn2()
//4.闹钟时间到
//5.写第一行代码

function createPaper(fn) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}



