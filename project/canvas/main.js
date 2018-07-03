var yyy = document.getElementById('xxx')
var context = yyy.getContext('2d')

autoSetCanvasSize(yyy);

/*************/

listenToMouse(yyy)

/*****************/

var XPEnabled = false
xp.onclick = function(){
  XPEnabled = true
  actions.className = 'actions x'
}
brush.onclick = function(){
  XPEnabled = false
  actions.className = 'actions'
}


/*********************************************/
function drawCircle(x,y,radius) {
  context.beginPath()
  context.arc(x,y,radius,0,Math.PI*2);
  context.fill()
}
function drawLine(x1,y1,x2,y2) {
  context.beginPath();
  context.strokeStyle = 'black'
  context.moveTo(x1,y1)
  context.lineWidth = 5
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}
function autoSetCanvasSize(canvas){
  setCanvasSize();
  window.onresize = function(){
    setCanvasSize()
  }
function setCanvasSize(){
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width =pageWidth
    canvas.height = pageHeight
    }
}
function listenToMouse(canvas){
var context = canvas.getContext('2d');

var using = false
var lastPoint = {x:undefined,y:undefined}
canvas.onmousedown = function(aaa) {
  var x = aaa.clientX
  var y = aaa.clientY
  using = true
  if(XPEnabled) {
    context.clearRect(x-5,y-5,10,10)
  } else{
    lastPoint = {"x":x,"y":y}
  }
}
canvas.onmousemove = function(aaa) {
   var x = aaa.clientX
   var y = aaa.clientY
   if (!using){ return}
  if(XPEnabled){
    context.clearRect(x-5,y-5,10,10)
  } else{
     
    var newPoint = {"x":x,"y":y}
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
    lastPoint = newPoint
  }
 
}
canvas.onmouseup = function(aaa) {
  using = false;
}

}
